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
      return Yup.number().transform(value => (Number.isNaN(value) || value === null || value === '' ? undefined : value));
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

class ValidatorSchema {
  constructor(props) {
    Object.assign(this, props);
  }

  handleValidations({validator, validations, answers, questionName}) {
    const {name} = this.question;
    const {initialValues, section, sections} = this;
    let newValidator = validator;
    validations.forEach(validation => {
      const {type: messageType} = validation.message;
      if (
        (messageType === 'warning' && this.opts.schemaType !== 'warning') ||
        (messageType === 'error' && this.opts.schemaType !== 'error')
      ) {
        return;
      }
      newValidator = newValidator.test(
        'custom-validation',
        validation.message.text,
        // eslint-disable-next-line func-names
        function (currentValue) {
          let formatAnswer = answers;
          formatAnswer = {...formatAnswer, [questionName]: {answer: {value: currentValue}}};
          const rules = getValidationRules({
            validation,
            answers: formatAnswer,
            initialValues,
            section,
            sections,
            questionName: name
          });
          if (rules.some(value => value === true)) {
            return this.createError({path: this.path, message: validation.message.text});
          }
          return true;
        }
      );
    });
    return newValidator;
  }

  buildSubQuestionsValidations(subQuestions, answers) {
    return subQuestions.reduce((acc, currentValue) => {
      const subQuestionValidator = getValidatorType(currentValue.type, currentValue.options);
      acc[currentValue.name] = Yup.object({
        answer: Yup.object({
          value: Yup.lazy(value =>
            this.handleValidations({
              validator: subQuestionValidator,
              validations: currentValue.validations,
              answers: {
                ...this.answers,
                [this.question.name]: {
                  answer: {
                    ...answers[this.question.name].answer,
                    specifications: {
                      ...answers[this.question.name].answer.specifications,
                      [currentValue.name]: {answer: {value}}
                    }
                  }
                }
              },
              questionName: currentValue.name
            })
          )
        })
      });
      return acc;
    }, {});
  }

  getSelectedSubQuestions({value}) {
    return this.question.subQuestions.filter(subQuestion => {
      const navigation = getNavigation({
        navigation: subQuestion.navigation,
        answers: {[this.question.name]: {answer: value}},
        section: this.section,
        initialValues: this.initialValues,
        sections: this.sections
      });
      return navigation.valid;
    });
  }

  getSubQuestionsSchema(schema, value) {
    let newSchema = schema;
    const subQuestionsToRender = this.getSelectedSubQuestions({value});
    newSchema = schema.concat(
      Yup.object({
        specifications: Yup.object(
          this.buildSubQuestionsValidations(subQuestionsToRender, {[this.question.name]: {answer: value}})
        )
      })
    );
    return newSchema;
  }

  buildAnswerObj({validator}) {
    const schema = Yup.object({value: validator});
    if (this.question.multiple) {
      return Yup.array().of(
        Yup.lazy(value => (this.question.subQuestions.length > 0 ? this.getSubQuestionsSchema(schema, value) : schema))
      );
    }
    return this.question.subQuestions.length > 0
      ? this.getSubQuestionsSchema(schema, this.answers[this.question.name].answer)
      : schema;
  }
}

export default function buildYupSchema(schema, question, sections, section, initialValues, values, opts = {}) {
  const schemaWithValidations = schema;
  const {name, type, options, metadata} = question;
  let validator = getValidatorType(type, options, metadata);
  if (!validator) {
    return schemaWithValidations;
  }
  const validationSchema = new ValidatorSchema({answers: values, question, opts, initialValues, section, sections});
  validator = validationSchema.handleValidations({
    validator,
    validations: question.validations,
    answers: values,
    questionName: name
  });
  schemaWithValidations[name] = Yup.object({
    id: Yup.number().required(),
    answer: validationSchema.buildAnswerObj({validator})
  });
  return schemaWithValidations;
}
