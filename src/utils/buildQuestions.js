import formStatuses from '@/constants/formStatuses';
import questionTypes from '@/constants/questionTypes';

const buildQuestions = section => {
  const values = {[section.name]: {id: 1, multiple: section.multiple, status: formStatuses.INCOMPLETE}};
  if (section.interruption.interruptible) {
    values[section.name][section.interruption.name] = '';
  }
  section.questions.forEach(question => {
    if (question.multiple) {
      values[section.name][question.name] = [{id: 1}];
      return;
    }
    if (question.type === questionTypes.CHECKBOX) {
      values[section.name][question.name] = [];
      return;
    }
    if (question.type === questionTypes.RADIO_TABLE) {
      const opts = question.options.reduce((acc, currentValue) => {
        acc[currentValue.name] = undefined;
        return acc;
      }, {});
      values[section.name][question.name] = opts;
      return;
    }
    values[section.name][question.name] = '';
  });
  values[section.name] = [values[section.name]];
  return values;
};

export default buildQuestions;
