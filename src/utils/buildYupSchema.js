import * as Yup from 'yup';

import dateTypes from '@/constants/dateTypes';
import questionTypes from '@/constants/questionTypes';
import castArray from '@/utils/castArray';

const getValidatorType = (type, options, {isRequired, message, metadata}) => {
  let validator;
  switch (type) {
  case questionTypes.TEXT_FIELD:
  case questionTypes.DROPDOWN:
  case questionTypes.RADIO:
    validator = Yup.string();
    break;
  case questionTypes.NUMERIC_FIELD:
    validator = Yup.number()
      .transform(value => (Number.isNaN(value) || value === null || value === undefined || value === '' ? 0 : value));
    break;
  case questionTypes.CHECKBOX:
    validator = Yup.array().of(Yup.string());
    break;
  case questionTypes.RADIO_TABLE: {
    const opts = options.reduce((accumulator, currentValue) => ({
      ...accumulator,
      [currentValue.name]: isRequired ? Yup.string().required(message) : Yup.string()
    }), {});
    validator = Yup.object(opts);
    break;
  }
  case questionTypes.DATE: {
    const field = isRequired ? Yup.string().required(message) : Yup.string();
    if ([dateTypes.RANGE_WITHOUT_HOUR, dateTypes.RANGE_WITH_HOUR].includes(metadata.dateType)) {
      validator = Yup.object({start: field, end: field});
    } else {
      validator = Yup.string();
    }
    break;
  }
  default:
    return validator;
  }
  return validator;
};

const handleValidations = ({validator, validations, type, opts}) => {
  let newValidator = validator;
  validations.forEach(validation => {
    let validationType = validation.type;
    if (
      (validationType === 'required' && type === questionTypes.RADIO_TABLE)
      || (validation.messageType === 'warning' && opts.schemaType !== 'warning')
      || (validation.messageType === 'error' && opts.schemaType !== 'error')
    ) {
      return;
    }
    const newParams = [];
    const isCheckboxRequired = validationType === 'required' && type === questionTypes.CHECKBOX;
    validation.params.forEach(param => {
      if (param.value || isCheckboxRequired) {
        newParams.push(isCheckboxRequired ? 1 : param.value, param.message);
      } else {
        newParams.push(param.message);
      }
    });
    if (isCheckboxRequired) {
      validationType = 'min';
    }
    newValidator = validator[validationType](...newParams);
  });
  return newValidator;
};

const buildSubQuestionsValidations = (subQuestions, opts) => subQuestions.reduce((acc, currentValue) => {
  let subQuestionValidator = Yup.string();
  const subQuestionValidations = currentValue.validations;
  subQuestionValidator = handleValidations({
    validator: subQuestionValidator,
    validations: subQuestionValidations,
    type: currentValue.type,
    opts
  });
  acc[currentValue.name] = Yup.object({answer: Yup.object({value: subQuestionValidator})});
  return acc;
}, {});

const buildAnswerObj = ({values, subQuestions, validator, multiple, opts}) => {
  const defaultSchema = multiple ? Yup.array().of(
    Yup.object({
      id: Yup.number().required(),
      value: validator
    })
  ) : Yup.object({value: validator});
  if (subQuestions.length > 0) {
    const selectedQuestions = buildSubQuestionsValidations(subQuestions.filter(
      subQuestion => castArray(values.value).includes(subQuestion.optionId.toString())
    ), opts);
    return defaultSchema.concat(
      Yup.object({
        specifications: Yup.object(selectedQuestions)
      })
    );
  }
  return defaultSchema;
};

export default function buildYupSchema(schema, config, opts = {}) {
  const schemaWithValidations = schema;
  const {
    name, type, validations, options, metadata, multiple, subQuestions = []
  } = config;
  const requiredField = validations.find(validation => validation.type === 'required');
  let validator = getValidatorType(
    type,
    options,
    {
      isRequired: !!requiredField,
      message: requiredField?.params?.[0]?.message,
      metadata
    }
  );
  if (!validator) {
    return schemaWithValidations;
  }
  validator = handleValidations({validator, validations, type, opts});
  schemaWithValidations[name] = Yup.object({
    id: Yup.number().required(),
    answer: Yup.lazy(values => buildAnswerObj({values, type, subQuestions, validator, multiple, opts}))
  });
  return schemaWithValidations;
}
