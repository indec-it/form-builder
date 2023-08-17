import * as Yup from 'yup';

import dateTypes from '@/constants/dateTypes';
import questionTypes from '@/constants/questionTypes';
import castArray from '@/utils/castArray';
import getValidationRules from '@/utils/getValidationRules';

const getValidatorType = (type, options, metadata) => {
  switch (type) {
  case questionTypes.TEXT_FIELD:
  case questionTypes.DROPDOWN:
  case questionTypes.RADIO:
    return Yup.string();
  case questionTypes.NUMERIC_FIELD:
    return Yup.number()
      .transform(value => (Number.isNaN(value) || value === null || value === undefined || value === '' ? 0 : value));
  case questionTypes.CHECKBOX:
    return Yup.array().of(Yup.string());
  case questionTypes.RADIO_TABLE: {
    const opts = options.reduce((accumulator, currentValue) => ({
      ...accumulator,
      [currentValue.name]: Yup.string().default('')
    }), {});
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

const handleValidations = ({validator, validations, opts, answers}) => {
  let newValidator = validator;
  validations.forEach((validation) => {
    const {type: messageType} = validation.message;
    if (
      (messageType === 'warning' && opts.schemaType !== 'warning')
      || (messageType === 'error' && opts.schemaType !== 'error')
    ) {
      return;
    }
    newValidator = newValidator.test(
      'custom-validation',
      validation.message.text,
      // eslint-disable-next-line func-names
      function () {
        const rules = getValidationRules({validation, answers});
        if (rules.some(value => value === true)) {
          return this.createError({path: this.path, message: validation.message.text});
        }
        return true;
      }
    );
  });
  return newValidator;
};

const buildSubQuestionsValidations = (subQuestions, opts) => subQuestions.reduce((acc, currentValue) => {
  let subQuestionValidator = Yup.string();
  const subQuestionValidations = currentValue.validations;
  subQuestionValidator = handleValidations({
    validator: subQuestionValidator,
    validations: subQuestionValidations,
    opts
  });
  acc[currentValue.name] = Yup.object({answer: Yup.object({value: subQuestionValidator})});
  return acc;
}, {});

const buildAnswerObj = ({values = [], subQuestions, validator, multiple, opts}) => {
  let defaultSchema = Yup.object({value: validator});
  if (subQuestions.length > 0) {
    const valuesToArray = multiple && values ? values.map(value => value.value) : castArray(values.value);
    const selectedSubQuestions = subQuestions.filter(
      subQuestion => valuesToArray.includes(subQuestion.optionId.toString())
    );
    const selectedQuestions = buildSubQuestionsValidations(selectedSubQuestions, opts);
    defaultSchema = defaultSchema.concat(
      Yup.object({
        specifications: Yup.object(selectedQuestions)
      })
    );
  }
  return multiple ? Yup.array().of(defaultSchema) : defaultSchema;
};

export default function buildYupSchema(schema, config, values, opts = {}) {
  const schemaWithValidations = schema;
  const {
    name, type, validations, options, metadata, multiple, subQuestions = []
  } = config;
  let validator = getValidatorType(
    type,
    options,
    metadata
  );
  if (!validator) {
    return schemaWithValidations;
  }
  validator = handleValidations({validator, validations, opts, answers: values});
  schemaWithValidations[name] = Yup.object({
    id: Yup.number().required(),
    answer: Yup.lazy(
      answerValues => buildAnswerObj({
        values: answerValues,
        type,
        subQuestions,
        validator,
        multiple,
        opts
      })
    )
  });
  return schemaWithValidations;
}
