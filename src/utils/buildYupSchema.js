import * as Yup from 'yup';

import questionTypes from '@/constants/questionTypes';

const getValidatorType = (type, options, {isRequired, message}) => {
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
  default:
    return validator;
  }
  return validator;
};

export default function buildYupSchema(schema, config, opts = {}) {
  const schemaWithValidations = schema;
  const {
    name, type, validations, options
  } = config;
  const requiredField = validations.find(validation => validation.type === 'required');
  let validator = getValidatorType(
    type,
    options,
    {isRequired: !!requiredField, message: requiredField?.params?.[0]?.message}
  );
  if (!validator) {
    return schemaWithValidations;
  }
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
    validator = validator[validationType](...newParams);
  });
  schemaWithValidations[name] = Yup.object({
    id: Yup.number().required(),
    answer: validator
  });
  return schemaWithValidations;
}
