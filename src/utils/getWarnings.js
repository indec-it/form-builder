import castErrorsFromYup from './castErrorsFromYup';

const getWarnings = (schema, values) => {
  let warnings = {};
  try {
    schema.validateSync(values, {abortEarly: false});
    return warnings;
  } catch (error) {
    warnings = castErrorsFromYup(error);
    return warnings;
  }
};

export default getWarnings;
