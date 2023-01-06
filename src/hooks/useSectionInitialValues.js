import {useState, useEffect} from 'react';

import buildQuestions from '@/utils/buildQuestions';

const useInitialValues = (section = {}) => {
  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    setInitialValues(buildQuestions(section));
  }, [section]);

  return {initialValues};
};

export default useInitialValues;
