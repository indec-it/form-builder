import {QUESTION_TYPES, DATE_TYPES} from '@/lib/enums';
import {Question, Section} from '@/lib/definitions';

const getValue = (question: Question): [] | '' | {start: ''; end: ''} | {[key: string]: undefined} => {
  switch (question.type) {
    case QUESTION_TYPES.CHECKBOX:
      return [];
    case QUESTION_TYPES.RADIO_TABLE: {
      const opts = question.options.reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue.name]: undefined
        }),
        {}
      );
      return opts;
    }
    case QUESTION_TYPES.DATE:
      if ([DATE_TYPES.RANGE_WITHOUT_HOUR, DATE_TYPES.RANGE_WITH_HOUR].includes(question.metadata.dateType)) {
        return {start: '', end: ''};
      }
      return '';
    default:
      return '';
  }
};

export const getSubQuestions = subQuestions =>
  Object.fromEntries(
    subQuestions.map(subQuestion => [
      subQuestion.name,
      {
        id: subQuestion.id,
        answer: {value: ''}
      }
    ])
  );

const buildQuestions = (section: Section) => {
  const values = {[section.name]: {id: 1}};
  if (section.interruption.interruptible) {
    values[section.name][section.interruption.name] = {id: `section-${section.id}`, answer: {value: ''}};
  }
  section.questions.forEach(question => {
    const {id} = question;
    if (question.type === QUESTION_TYPES.MESSAGE) {
      values[section.name][question.name] = {id};
    } else {
      values[section.name][question.name] = {id, answer: {value: getValue(question)}};
      if (question.subQuestions && question.subQuestions.length > 0) {
        values[section.name][question.name] = {
          ...values[section.name][question.name],
          answer: {
            ...values[section.name][question.name].answer,
            specifications: getSubQuestions(question.subQuestions)
          }
        };
      }
      if (question.multiple) {
        values[section.name][question.name] = {
          ...values[section.name][question.name],
          answer: [{id: 1, ...values[section.name][question.name].answer}]
        };
      }
    }
  });
  values[section.name] = [values[section.name]];
  return values;
};

export default buildQuestions;
