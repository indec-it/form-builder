import castErrorsFromYup from './castErrorsFromYup';

const getWarnings = (schema, values) => {
  let warnings = {};
  if (!schema) {
    return warnings;
  }
  try {
    schema.validateSync(values, {abortEarly: false});
  } catch (error) {
    warnings = castErrorsFromYup(error);
  }
  return warnings;
};

export default getWarnings;
