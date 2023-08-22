import operations from './operations';

const getConditions = ({conditions, answers}) => conditions.map(
  condition => {
    if (!Object.prototype.hasOwnProperty.call(answers, condition.question)) {
      return false;
    }
    const question = answers[condition.question];
    const value = question?.answer?.value;
    return operations[condition.type](value || '', condition.value);
  }
);

const getValidationRules = ({validation, answers}) => validation.rules.map(rule => {
  const conditions = getConditions({conditions: rule.conditions, answers});
  return conditions.every(condition => condition);
});

export default getValidationRules;
