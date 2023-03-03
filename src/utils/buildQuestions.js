import questionTypes from '@/constants/questionTypes';
import dateTypes from '@/constants/dateTypes';

const getValueType = question => {
  let value = '';
  switch (question.type) {
  case questionTypes.CHECKBOX:
    value = [];
    break;
  case questionTypes.RADIO_TABLE: {
    const opts = question.options.reduce((accumulator, currentValue) => ({
      ...accumulator,
      [currentValue.name]: undefined
    }), {});
    value = opts;
    break;
  }
  case questionTypes.DATE: {
    if ([dateTypes.RANGE_WITHOUT_HOUR, dateTypes.RANGE_WITH_HOUR].includes(question.metadata.dateType)) {
      value = {start: '', end: ''};
    }
    break;
  }
  case questionTypes.TABLE: {
    value = {};
    const columns = question.columns.reduce((acc, currentValue) => {
      acc[currentValue.name] = getValueType({
        type: currentValue.type, options: currentValue.options, metadata: currentValue.metadata
      });
      return acc;
    }, {});
    value = question.rows.reduce((acc, currentValue, currentIndex) => {
      acc[currentIndex] = columns;
      return acc;
    }, {});
    break;
  }
  default:
    return value;
  }
  return value;
};

const getSubQuestions = subQuestions => subQuestions.reduce((accumulator, currentValue, currentIndex) => {
  accumulator[currentValue.name] = {
    id: currentIndex + 1,
    optionId: currentValue.optionId,
    answer: {value: ''}
  };
  return accumulator;
}, {});

const buildQuestions = section => {
  const values = {[section.name]: {id: 1}};
  if (section.interruption.interruptible) {
    values[section.name][section.interruption.name] = {id: `section-${section.id}`, answer: {value: ''}};
  }
  section.questions.forEach(question => {
    const {id} = question;
    values[section.name][question.name] = {id, answer: {value: getValueType(question)}};
    if (question.multiple) {
      values[section.name][question.name] = {id, answer: [{id: 1, value: getValueType(question)}]};
    }
    if (question.subQuestions && question.subQuestions.length > 0) {
      values[section.name][question.name] = {
        ...values[section.name][question.name],
        answer: {
          ...values[section.name][question.name].answer,
          specifications: getSubQuestions(question.subQuestions)
        }
      };
    }
  });
  values[section.name] = [values[section.name]];
  return values;
};

export default buildQuestions;
