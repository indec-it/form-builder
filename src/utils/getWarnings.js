import yupToFriendlyErrors from './yupToFriendlyErrors';

const getWarnings = (schema, values) => {
  let warnings = {};
  try {
    schema.validateSync(values, {abortEarly: false});
    return warnings;
  } catch (error) {
    warnings = yupToFriendlyErrors(error);
    return warnings;
  }
};

export default getWarnings;
