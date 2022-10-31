import questionTypes from '@constants/questionTypes';

const buildQuestions = section => {
  const values = {[section.name]: {id: 1, multiple: section.multiple}};
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
      const opts = {};
      question.options.forEach(option => {
        Object.assign(opts, {[option.name]: ''});
      });
      values[section.name][question.name] = opts;
      return;
    }
    values[section.name][question.name] = '';
  });
  values[section.name] = [values[section.name]];
  return values;
};

export default buildQuestions;
