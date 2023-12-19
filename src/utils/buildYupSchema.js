/* eslint-disable function-paren-newline */
import * as Yup from 'yup';

import dateTypes from '@/constants/dateTypes';
import questionTypes from '@/constants/questionTypes';
import getValidationRules from '@/utils/getValidationRules';
import getNavigation from '@/utils/getNavigation';

const getValidatorType = (type, options, metadata) => {
  switch (type) {
    case questionTypes.TEXT_FIELD:
    case questionTypes.DROPDOWN:
    case questionTypes.RADIO:
      return Yup.string().default('');
    case questionTypes.CURRENCY:
    case questionTypes.NUMERIC_FIELD:
      return Yup.number().transform(value =>
        Number.isNaN(value) || value === null || value === undefined || value === '' ? 0 : value
      );
    case questionTypes.CHECKBOX:
      return Yup.array().of(Yup.string());
    case questionTypes.RADIO_TABLE: {
      const opts = options.reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue.name]: Yup.string().default('')
        }),
        {}
      );
      return Yup.object(opts);
    }
    case questionTypes.DATE: {
      const field = Yup.string().default('');
      if ([dateTypes.RANGE_WITHOUT_HOUR, dateTypes.RANGE_WITH_HOUR].includes(metadata.dateType)) {
        return Yup.object({start: field, end: field});
      }
      return Yup.string();
    }
    default:
      return null;
  }
};

const handleValidations = ({validator, validations, opts, answers, questionName, multiple = false, questionType}) => {
  let newValidator = validator;
  validations.forEach(validation => {
    const {type: messageType} = validation.message;
    if (
      (messageType === 'warning' && opts.schemaType !== 'warning') ||
      (messageType === 'error' && opts.schemaType !== 'error')
    ) {
      return;
    }
    newValidator = newValidator.test(
      'custom-validation',
      validation.message.text,
      // eslint-disable-next-line func-names
      function (currentValue) {
        let formatAnswer = answers;
        formatAnswer = multiple ? {...formatAnswer, [questionName]: {answer: {value: currentValue}}} : formatAnswer;
        const rules = getValidationRules({validation, answers: formatAnswer, questionType});
        if (rules.some(value => value === true)) {
          return this.createError({path: this.path, message: validation.message.text});
        }
        return true;
      }
    );
  });
  return newValidator;
};

const buildSubQuestionsValidations = (subQuestions, opts, answers, multiple) =>
  subQuestions.reduce((acc, currentValue) => {
    const subQuestionValidator = getValidatorType(currentValue.type, currentValue.options);
    acc[currentValue.name] = Yup.object({
      answer: Yup.object({
        value: Yup.lazy(value =>
          handleValidations({
            validator: subQuestionValidator,
            validations: currentValue.validations,
            opts,
            answers: {
              ...answers,
              [currentValue.name]: {answer: {value}}
            },
            questionName: currentValue.name,
            multiple
          })
        )
      })
    });
    return acc;
  }, {});

const getSelectedSubQuestions = ({subQuestions, parentName, value}) =>
  subQuestions.filter(
    subQuestion =>
      !getNavigation({
        navigation: subQuestion.navigation,
        answers: {[parentName]: {answer: value}}
      })
  );

const getSubQuestionsSchema = (subQuestions, schema, opts, questionName, value, multiple) => {
  let newSchema = schema;
  if (subQuestions.length > 0) {
    const subQuestionsToRender = getSelectedSubQuestions({subQuestions, parentName: questionName, value});
    newSchema = schema.concat(
      Yup.object({
        specifications: Yup.object(
          buildSubQuestionsValidations(subQuestionsToRender, opts, {[questionName]: {answer: value}}, multiple)
        )
      })
    );
  }
  return newSchema;
};

const buildAnswerObj = ({answers, subQuestions, validator, multiple, opts, name: questionName}) => {
  let schema = Yup.object({value: validator});
  if (multiple) {
    return Yup.array().of(
      Yup.lazy(value => {
        schema = getSubQuestionsSchema(subQuestions, schema, opts, questionName, value, multiple);
        return schema;
      })
    );
  }
  schema = getSubQuestionsSchema(subQuestions, schema, opts, questionName, answers[questionName].answer, multiple);
  return schema;
};

export default function buildYupSchema(schema, config, values, opts = {}) {
  const schemaWithValidations = schema;
  const {name, type, validations, options, metadata, multiple, subQuestions = []} = config;
  let validator = getValidatorType(type, options, metadata);
  if (!validator) {
    return schemaWithValidations;
  }
  validator = handleValidations({
    validator,
    validations,
    opts,
    answers: values,
    questionName: name,
    multiple,
    questionType: type
  });
  schemaWithValidations[name] = Yup.object({
    id: Yup.number().required(),
    answer: buildAnswerObj({
      answers: values,
      type,
      subQuestions,
      validator,
      multiple,
      opts,
      name
    })
  });
  return schemaWithValidations;
}
