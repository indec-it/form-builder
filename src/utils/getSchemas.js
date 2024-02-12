import * as Yup from 'yup';

import buildYupSchema from './buildYupSchema';

const getSchema = (sections, section, initialValues, schemaType) => {
  const schema = sectionValues =>
    section.questions.reduce(
      (acc, currentValue) =>
        buildYupSchema(acc, currentValue, sections, section, initialValues, sectionValues, {schemaType}),
      {}
    );
  return Yup.object({
    [section.name]: Yup.array().of(Yup.lazy(values => Yup.object(schema(values))))
  });
};

const getSchemas = ({section = {}, sections = [], initialValues}) => {
  const errorSchema = getSchema(sections, section, initialValues, 'error');
  const warningSchema = getSchema(sections, section, initialValues, 'warning');
  return {errorSchema, warningSchema};
};

export default getSchemas;
