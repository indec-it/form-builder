import getValidationRules from './getValidationRules';

const getNavigation = ({navigation = [], answers, section, initialValues, sections, questionName, isSubQuestion}) => {
  if (navigation.length === 0) {
    return {valid: true};
  }
  const navigationRules = navigation.map(nav => {
    const rules = getValidationRules({
      validation: nav,
      answers,
      section,
      initialValues,
      sections,
      questionName,
      isSubQuestion
    });
    return {
      action: nav.action,
      result: rules.some(value => value),
      valid: false
    };
  });
  return navigationRules.find(rule => rule.result) || {valid: true};
};

export default getNavigation;
