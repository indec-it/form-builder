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
  if (question.type === questionTypes.RADIO_TABLE) {
    const opts = {};
    question.options.forEach(option => {
      Object.assign(opts, {[option.name]: ''})
    });
    return {
      [question.name]: opts
    };
  }
  return {[question.name]: ''};
});

export default buildQuestions;
