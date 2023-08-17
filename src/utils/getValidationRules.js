import operations from './operations';

const getConditions = ({conditions, answers}) => conditions.map(
  condition => {
    if (!Object.prototype.hasOwnProperty.call(answers, condition.question)) {
      return false;
    }
    return operations[condition.type](answers[condition.question]?.answer?.value || '', condition.value);
  }
);

const getValidationRules = ({validation, answers}) => validation.rules.map(rule => {
  const conditions = getConditions({conditions: rule.conditions, answers});
  return conditions.every(condition => condition);
});

export default getValidationRules;
