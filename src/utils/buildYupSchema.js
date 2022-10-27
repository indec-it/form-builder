import * as Yup from 'yup';

export default function buildYupSchema(schema, config) {
  const {
    name, type, required, requiredLabel
  } = config;
  let validator;
  if ([1, 3, 4, 6].includes(type)) {
    validator = Yup.string();
  } else {
    validator = Yup.number();
  }
  if (required) {
    validator = validator.required(requiredLabel);
  }
  schema[name] = validator;
  return schema;
}
