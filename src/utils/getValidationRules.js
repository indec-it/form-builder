import questionTypes from '@/constants/questionTypes';

import isObject from './isObject';
import operations from './operations';

const getAnswerValue = (answer = {}) => answer.value;

const getResult = (condition, answer, type) => {
  const value = getAnswerValue(answer);
  let parsedValue = typeof value === 'number' ? value : value || '';
  if (type === questionTypes.DATE && !isObject(parsedValue)) {
    parsedValue = {parsedValue};
  }
  return operations[condition.type](parsedValue, condition.value, type);
};

const evaluateConditions = ({conditions, sectionAnswers, initialValues, currentSection, sections, questionName}) =>
  conditions.map(condition => {
    if (!sections) {
      return false;
    }

    const section = sections.find(({name}) => name === condition.section);

    if (!section) {
      return false;
    }

    let question = section.questions.find(({name}) => name === questionName);

    if (condition.subQuestion) {
      question = question.subQuestions.find(({name}) => name === condition.subQuestion);
    }

    const type = question?.type;

    const isMatchingSection = condition.section === currentSection.name && sectionAnswers;

    let answers;

    if (isMatchingSection) {
      answers = condition.subQuestion
        ? sectionAnswers[condition.question]?.answer.specifications[condition.subQuestion]
        : sectionAnswers[condition.question];
    } else {
      answers = (initialValues?.[condition.section] || []).map(initialValue =>
        condition.subQuestion
          ? initialValue?.[condition.question]?.answer?.specifications[condition.subQuestion]
          : initialValue?.[condition.question]
      );
    }

    if (Array.isArray(answers) || Array.isArray(answers?.answer)) {
      const parsedAnswers = Array.isArray(answers)
        ? answers
        : answers?.answer.flatMap(currentAnswer => ({answer: currentAnswer}));
      return parsedAnswers.some(answer => {
        if (Array.isArray(answer?.answer)) {
          return answer.answer.some(currentAnswer => getResult(condition, currentAnswer, type));
        }
        return getResult(condition, answer.answer, type);
      });
    }
    return getResult(condition, answers.answer, type);
  });

const getValidationRules = ({validation, answers, initialValues, section, sections, questionName}) =>
  validation.rules.map(rule => {
    const conditions = evaluateConditions({
      conditions: rule.conditions,
      sectionAnswers: answers,
      initialValues,
      currentSection: section,
      sections,
      questionName
    });
    return conditions.every(condition => condition);
  });

export default getValidationRules;
