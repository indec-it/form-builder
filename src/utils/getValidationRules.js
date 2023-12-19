import operations from './operations';

const getConditions = ({conditions, answers, questionType}) =>
  conditions.map(condition => {
    if (!Object.prototype.hasOwnProperty.call(answers, condition.question)) {
      return false;
    }
    const question = answers[condition.question];
    const value = question?.answer?.value;
    return operations[condition.type](typeof value === 'number' ? value : value || '', condition.value, questionType);
  });

const getValidationRules = ({validation, answers, questionType}) =>
  validation.rules.map(rule => {
    const conditions = getConditions({conditions: rule.conditions, answers, questionType});
    return conditions.every(condition => condition);
  });

export default getValidationRules;
