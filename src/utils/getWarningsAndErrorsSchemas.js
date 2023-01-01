import * as Yup from 'yup';

import buildYupSchema from './buildYupSchema';

const getWarningsAndErrorsSchemas = (section = {}) => {
  const yepErrorSchema = section.questions.reduce(
    (acc, currentValue) => buildYupSchema(acc, currentValue, {schemaType: 'error'}),
    {}
  );
  const yepWarningSchema = section.questions.reduce(
    (acc, currentValue) => buildYupSchema(acc, currentValue, {schemaType: 'warning'}),
    {}
  );
  const errorSchema = Yup.object({
    [section.name]: Yup.array().of(
      Yup.object(yepErrorSchema)
    )
  });
  const warningSchema = Yup.object({
    [section.name]: Yup.array().of(
      Yup.object(yepWarningSchema)
    )
  });
  return {errorSchema, warningSchema};
};

export default getWarningsAndErrorsSchemas;
