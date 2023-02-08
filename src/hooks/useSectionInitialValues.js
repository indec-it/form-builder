import {useState, useEffect} from 'react';

import buildQuestions from '@/utils/buildQuestions';

const useInitialValues = (values, section = {}) => {
  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    setInitialValues(values || buildQuestions(section));
  }, [section]);

  return {initialValues};
};

export default useInitialValues;
