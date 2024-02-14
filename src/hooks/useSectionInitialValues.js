import {useState, useEffect} from 'react';

import buildQuestions from '@/utils/buildQuestions';

const useSectionInitialValues = (values, section) => {
  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    setInitialValues(values && values[section.name] ? {[section.name]: values[section.name]} : buildQuestions(section));
  }, [section, values]);

  return {initialValues};
};

export default useSectionInitialValues;
