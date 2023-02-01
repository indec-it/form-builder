import questionTypes from '@/constants/questionTypes';
import dateTypes from '@/constants/dateTypes';

const getAnswerValueType = question => {
  let answer = '';
  if (question.type === questionTypes.CHECKBOX) {
    answer = [];
  }
  if (question.type === questionTypes.RADIO_TABLE) {
    const opts = question.options.reduce((accumulator, currentValue) => ({
      ...accumulator,
      [currentValue.name]: undefined
    }), {});
    answer = opts;
  }
  if (question.type === questionTypes.DATE) {
    if ([dateTypes.RANGE_WITHOUT_HOUR, dateTypes.RANGE_WITH_HOUR].includes(question.metadata.dateType)) {
      answer = {start: '', end: ''};
    }
  }
  return answer;
};

const buildQuestions = section => {
  const values = {[section.name]: {id: 1}};
  if (section.interruption.interruptible) {
    values[section.name][section.interruption.name] = {id: `section-${section.id}`, answer: ''};
  }
  section.questions.forEach(question => {
    const {id} = question;
    values[section.name][question.name] = {id, answer: getAnswerValueType(question)};
    if (question.multiple) {
      values[section.name][question.name] = {id, answer: [{id: 1, value: getAnswerValueType(question)}]};
    }
  });
  values[section.name] = [values[section.name]];
  return values;
};

export default buildQuestions;
