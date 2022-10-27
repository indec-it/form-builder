import questionTypes from '@constants/questionTypes';

const buildQuestions = section => section.questions.map(question => {
  if (question.multiple) {
    return {
      [question.name]: [{id: 1}]
    };
  }
  if (question.type === questionTypes.CHECKBOX) {
    return {
      [question.name]: []
    };
  }
  return {[question.name]: ''};
});

export default buildQuestions;
