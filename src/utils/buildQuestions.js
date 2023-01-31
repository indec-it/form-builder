import questionTypes from '@/constants/questionTypes';
import dateTypes from '@/constants/dateTypes';

const buildQuestions = section => {
  const values = {[section.name]: {id: 1}};
  if (section.interruption.interruptible) {
    values[section.name][section.interruption.name] = {id: `section-${section.id}`, answer: ''};
  }
  section.questions.forEach(question => {
    const {id} = question;
    values[section.name][question.name] = {id};
    if (question.multiple) {
      values[section.name][question.name].answer = [{id: 1}];
      return;
    }
    if (question.type === questionTypes.CHECKBOX) {
      values[section.name][question.name].answer = [];
      return;
    }
    if (question.type === questionTypes.RADIO_TABLE) {
      const opts = question.options.reduce((accumulator, currentValue) => ({
        ...accumulator,
        [currentValue.name]: undefined
      }), {});
      values[section.name][question.name].answer = opts;
      return;
    }
    if (question.type === questionTypes.DATE) {
      if ([dateTypes.RANGE_WITHOUT_HOUR, dateTypes.RANGE_WITH_HOUR].includes(question.metadata.dateType)) {
        values[section.name][question.name].answer = {start: '', end: ''};
      } else {
        values[section.name][question.name].answer = '';
      }
      return;
    }
    values[section.name][question.name].answer = '';
  });
  values[section.name] = [values[section.name]];
  return values;
};

export default buildQuestions;
