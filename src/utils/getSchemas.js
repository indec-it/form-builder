import * as Yup from 'yup';

import buildYupSchema from './buildYupSchema';

const getSchema = (sections, schemaType) => {
  const schema = (sectionValues, section) =>
    section.questions.reduce((acc, currentValue) => buildYupSchema(acc, currentValue, sectionValues, {schemaType}), {});
  return Yup.object(
    sections.reduce((acc, currentValue) => {
      acc[currentValue.name] = Yup.array().of(Yup.lazy(values => Yup.object(schema(values, currentValue))));
      return acc;
    }, {})
  );
};

const getSchemas = ({sections = []}) => {
  const errorSchema = getSchema(sections, 'error');
  const warningSchema = getSchema(sections, 'warning');
  return {errorSchema, warningSchema};
};

export default getSchemas;
