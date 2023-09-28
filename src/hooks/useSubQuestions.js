import {useEffect, useState} from 'react';
import {useFormikContext} from 'formik';

import {getSubQuestions} from '@/utils/buildQuestions';
import getNavigation from '@/utils/getNavigation';

const useSubQuestions = ({subQuestions, value, name, specificationsPathName}) => {
  const [selectedQuestions, setSelectedSubQuestions] = useState([]);
  const {setFieldValue} = useFormikContext();

  useEffect(() => {
    const allSubQuestions = subQuestions.map(
      subQuestion => {
        const condition = getNavigation({
          navigation: subQuestion.navigation, answers: value, questionType: subQuestion.type
        });
        return {...subQuestion, show: !condition};
      }
    );
    const hiddenSubQuestions = allSubQuestions.filter(subQuestion => !subQuestion.show);
    const showSubQuestions = allSubQuestions.filter(subQuestion => subQuestion.show);
    if (hiddenSubQuestions.length > 0) {
      setFieldValue(
        specificationsPathName,
        {...value?.[name]?.answer?.specifications, ...getSubQuestions(hiddenSubQuestions)}
      );
    }
    if (showSubQuestions.length > 0) {
      showSubQuestions.forEach(subQuestion => {
        // eslint-disable-next-line no-param-reassign
        delete subQuestion.show;
      });
      setSelectedSubQuestions(showSubQuestions);
    }
  }, [value?.[name]?.answer?.value]);

  return {selectedQuestions};
};

export default useSubQuestions;
