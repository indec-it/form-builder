import * as Yup from 'yup';

import buildYupSchema from './buildYupSchema';

const getSchema = (section, schemaType) => {
  const schema = section.questions.reduce(
    (acc, currentValue) => buildYupSchema(acc, currentValue, {schemaType}),
    {}
  );
  return Yup.object({
    [section.name]: Yup.array().of(Yup.object(schema))
  });
};

const getSchemas = (section = {}) => {
  const errorSchema = getSchema(section, 'error');
  const warningSchema = getSchema(section, 'warning');
  return {errorSchema, warningSchema};
};

export default getSchemas;
