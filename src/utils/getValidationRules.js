import operations from './operations';

const getAnswerValue = (answer = {}) => answer.value;

const getResult = (condition, answer, type) => {
  const value = getAnswerValue(answer);
  return operations[condition.type](typeof value === 'number' ? value : value || '', condition.value, type);
};

const evaluateConditions = ({conditions, answers, initialValues, currentSection, sections, questionName, isSubQuestion}) =>
  conditions.map(condition => {
    if (!sections) {
      return false;
    }

    const section = sections.find(({name}) => name === condition.section);

    if (!section) {
      return false;
    }

    const question = isSubQuestion
      ? section.questions
          .find(({name}) => name === questionName)
          ?.subQuestions.find(subQuestion => subQuestion.name === condition.question)
      : section.questions.find(({name}) => name === condition.question);
    const type = question?.type;

    const answer =
      condition.section === currentSection.name && answers
        ? answers[condition.question]
        : (initialValues?.[condition.section] || []).map(initialValue => initialValue?.[condition.question]);

    if (Array.isArray(answer)) {
      return answer.some(currentQuestion => {
        if (Array.isArray(currentQuestion?.answer)) {
          return currentQuestion.answer.some(currentAnswer => getResult(condition, currentAnswer, type));
        }
        return getResult(condition, currentQuestion.answer, type);
      });
    }
    return getResult(condition, answer.answer, type);
  });

const getValidationRules = ({validation, answers, initialValues, section, sections, questionName, isSubQuestion = false}) =>
  validation.rules.map(rule => {
    const conditions = evaluateConditions({
      conditions: rule.conditions,
      answers,
      initialValues,
      currentSection: section,
      sections,
      questionName,
      isSubQuestion
    });
    return conditions.every(condition => condition);
  });

export default getValidationRules;
