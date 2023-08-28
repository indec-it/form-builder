import questionActions from '@/constants/questionActions';
import questionTypes from '@/constants/questionTypes';

import getNavigation from './getNavigation';

const getQuestionProps = ({sectionIndex, section, question, values, disabled, warnings}) => {
  const {
    number,
    label,
    multiple,
    subQuestions,
    type,
    placeholder,
    name,
    options,
    metadata,
    navigation = []
  } = question;

  const questionName = section ? `${section.name}.${sectionIndex}.${name}.answer` : '';
  const jump = section ? getNavigation({navigation, answers: values}) : '';
  const show = jump?.action !== questionActions.HIDE;
  const isDisabled = jump?.action === questionActions.DISABLE || disabled;
  let props;
  switch (type) {
  case questionTypes.NUMERIC_FIELD:
  case questionTypes.TEXT_FIELD:
  case questionTypes.CURRENCY:
    props = {
      label: {text: label, number},
      placeholder,
      name: questionName,
      type: [questionTypes.TEXT_FIELD, questionTypes.CURRENCY].includes(type) ? 'text' : 'number',
      disabled: isDisabled,
      warnings,
      isMultiple: multiple,
      values: values[name],
      subQuestions,
      show
    };
    break;
  case questionTypes.DROPDOWN:
    props = {
      label: {text: label, number},
      placeholder,
      name: questionName,
      options,
      disabled: isDisabled,
      isMultiple: multiple,
      warnings,
      values: values[name],
      subQuestions,
      show
    };
    break;
  case questionTypes.RADIO:
  case questionTypes.CHECKBOX:
  case questionTypes.RADIO_TABLE:
    props = {
      label: {text: label, number},
      name: questionName,
      options,
      disabled: isDisabled,
      isMultiple: multiple,
      warnings,
      values: values[name],
      subQuestions,
      show
    };
    break;
  case questionTypes.DATE:
    props = {
      label: {text: label, number},
      placeholder,
      name: questionName,
      disabled: isDisabled,
      isMultiple: multiple,
      metadata,
      warnings,
      values: values[name],
      subQuestions,
      show
    };
    break;
  default:
    return props;
  }
  return {props, questionName, jump, questionType: type};
};

export default getQuestionProps;
