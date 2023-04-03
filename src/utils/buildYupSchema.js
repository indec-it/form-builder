import * as Yup from 'yup';

import dateTypes from '@/constants/dateTypes';
import questionTypes from '@/constants/questionTypes';
import castArray from '@/utils/castArray';

const getValidatorType = (type, options, {isRequired, message, metadata}) => {
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
      [currentValue.name]: isRequired ? Yup.string().required(message) : Yup.string()
    }), {});
    return Yup.object(opts);
  }
  case questionTypes.DATE: {
    const field = isRequired ? Yup.string().required(message) : Yup.string();
    if ([dateTypes.RANGE_WITHOUT_HOUR, dateTypes.RANGE_WITH_HOUR].includes(metadata.dateType)) {
      return Yup.object({start: field, end: field});
    }
    return Yup.string();
  }
  default:
    return null;
  }
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
      if (typeof param.value === 'number' || param.value || isCheckboxRequired) {
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

export default function buildYupSchema(schema, config, opts = {}) {
  const schemaWithValidations = schema;
  const {
    name, type, validations, options, metadata, multiple, subQuestions = []
  } = config;
  const requiredField = validations.some(validation => validation.type === 'required');
  let validator = getValidatorType(
    type,
    options,
    {
      isRequired: requiredField,
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
