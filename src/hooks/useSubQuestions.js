import {useEffect, useState} from 'react';
import {useFormikContext} from 'formik';

import {getSubQuestions} from '@/utils/buildQuestions';
import getNavigation from '@/utils/getNavigation';

import useForm from './useForm';

const useSubQuestions = ({subQuestions, value, name, specificationsPathName}) => {
  const [selectedQuestions, setSelectedSubQuestions] = useState([]);
  const {setFieldValue} = useFormikContext();
  const {sections, initialValues, section} = useForm();

  useEffect(() => {
    const allSubQuestions = subQuestions.map(subQuestion => ({
      ...subQuestion,
      show: getNavigation({
        navigation: subQuestion.navigation,
        answers: value,
        section,
        initialValues,
        sections,
        questionName: name,
        isSubQuestion: true
      }).valid
    }));
    const hiddenSubQuestions = allSubQuestions.filter(subQuestion => !subQuestion.show);
    const showSubQuestions = allSubQuestions.filter(subQuestion => subQuestion.show);
    if (hiddenSubQuestions.length > 0) {
      setFieldValue(specificationsPathName, {
        ...value?.[name]?.answer?.specifications,
        ...getSubQuestions(hiddenSubQuestions)
      });
    }
    setSelectedSubQuestions(showSubQuestions);
  }, [value?.[name]?.answer?.value]);

  return {selectedQuestions};
};

export default useSubQuestions;
