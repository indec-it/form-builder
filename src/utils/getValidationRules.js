import operations from './operations';

const getAnswerValue = (answer = {}) => answer.value;

const getResult = (condition, answer, type) => {
  const value = getAnswerValue(answer);
  return operations[condition.type](typeof value === 'number' ? value : value || '', condition.value, type);
};

const evaluateConditions = ({
  conditions,
  sectionAnswers,
  initialValues,
  currentSection,
  sections,
  questionName,
  isSubQuestion
}) =>
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

    const answers =
      condition.section === currentSection.name && sectionAnswers
        ? sectionAnswers[condition.question]
        : (initialValues?.[condition.section] || []).map(initialValue => initialValue?.[condition.question]);

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

const getValidationRules = ({validation, answers, initialValues, section, sections, questionName, isSubQuestion = false}) =>
  validation.rules.map(rule => {
    const conditions = evaluateConditions({
      conditions: rule.conditions,
      sectionAnswers: answers,
      initialValues,
      currentSection: section,
      sections,
      questionName,
      isSubQuestion
    });
    return conditions.every(condition => condition);
  });

export default getValidationRules;
