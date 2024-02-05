import {useState, useEffect} from 'react';

import buildQuestions from '@/utils/buildQuestions';

const useSectionInitialValues = (values, sections) => {
  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    setInitialValues(values || buildQuestions(sections));
  }, [sections]);

  return {initialValues};
};

export default useSectionInitialValues;
