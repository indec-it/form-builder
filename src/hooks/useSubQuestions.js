import {useEffect, useState} from 'react';

import castArray from '@/utils/castArray';

const useSubQuestions = (subQuestions, value) => {
  const [selectedQuestions, setSelectedSubQuestions] = useState([]);

  useEffect(() => {
    const subQuestionsFiltered = subQuestions.filter(
      subQuestion => castArray(value).includes(subQuestion.optionId.toString())
    );
    setSelectedSubQuestions(subQuestionsFiltered);
  }, [value]);

  return {selectedQuestions};
};

export default useSubQuestions;
