import {useEffect, useState} from 'react';

import getNavigation from '@/utils/getNavigation';

const useSubQuestions = ({subQuestions, value, name}) => {
  const [selectedQuestions, setSelectedSubQuestions] = useState([]);
  useEffect(() => {
    const subQuestionsFiltered = subQuestions.filter(
      subQuestion => {
        const condition = getNavigation({navigation: subQuestion.navigation, answers: value});
        return !condition;
      }
    );
    setSelectedSubQuestions(subQuestionsFiltered);
  }, [value?.[name]?.answer?.value]);

  return {selectedQuestions};
};

export default useSubQuestions;
