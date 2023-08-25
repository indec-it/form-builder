import getValidationRules from './getValidationRules';

const getNavigation = ({navigation = [], answers}) => {
  if (navigation.length === 0) {
    return true;
  }
  const navigationRules = navigation.map(nav => {
    const rules = getValidationRules({validation: nav, answers});
    // eslint-disable-next-line consistent-return
    return {
      action: nav.action,
      result: rules.some(value => value)
    };
  });
  return navigationRules.find(rule => rule.result);
};

export default getNavigation;