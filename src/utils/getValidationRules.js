import validationTypes from '@/constants/validationTypes';

import operations from './operations';

const convertString = input => {
  const withoutThousands = input.replace(/\./g, '');
  const withDecimalPoint = withoutThousands.replace(',', '.');
  const convertedNumber = parseFloat(withDecimalPoint);
  return convertedNumber;
};

const getConditions = ({conditions, answers}) => conditions.map(
  condition => {
    if (!Object.prototype.hasOwnProperty.call(answers, condition.question)) {
      return false;
    }
    const question = answers[condition.question];
    let value = question?.answer?.value;
    if (
      [
        validationTypes.GREATER_OR_EQUAL_TO,
        validationTypes.GREATER_THAN,
        validationTypes.LESS_THAN,
        validationTypes.LESS_THAN_OR_EQUAL_TO,
        validationTypes.NOT_EQUAL,
        validationTypes.EQUAL
      ].includes(condition.type)
      && typeof condition.value === 'number'
      && typeof value === 'string'
    ) {
      value = convertString(value);
    }
    return operations[condition.type](typeof value === 'number' ? value : value || '', condition.value);
  }
);

const getValidationRules = ({validation, answers}) => validation.rules.map(rule => {
  const conditions = getConditions({conditions: rule.conditions, answers});
  return conditions.every(condition => condition);
});

export default getValidationRules;
