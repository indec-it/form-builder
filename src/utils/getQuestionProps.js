import questionActions from '@/constants/questionActions';
import questionTypes from '@/constants/questionTypes';

import getNavigation from './getNavigation';

const isNumericOrCurrency = type => [questionTypes.NUMERIC_FIELD, questionTypes.CURRENCY].includes(type);

const getQuestionProps = ({sectionIndex, section, question, values, disabled, warnings, initialValues, sections}) => {
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
    navigation = [],
    introduction,
    multiline = false,
    disabled: disabledByDefault,
    readOnly,
    hide
  } = question;

  const questionName = section ? `${section.name}.${sectionIndex}.${name}.answer` : '';
  const jump = section ? getNavigation({navigation, answers: values, section, initialValues, sections}) : '';
  const show = hide ? false : jump?.action !== questionActions.HIDE;
  const isDisabled = jump?.action === questionActions.DISABLE || disabled || readOnly;
  let props;
  switch (type) {
    case questionTypes.NUMERIC_FIELD:
    case questionTypes.TEXT_FIELD:
    case questionTypes.CURRENCY:
      props = {
        label: {text: label, number, introduction},
        placeholder: !placeholder && isNumericOrCurrency(type) ? 'Ingrese Valor' : placeholder,
        name: questionName,
        type: [questionTypes.TEXT_FIELD, questionTypes.CURRENCY].includes(type) ? 'text' : 'number',
        disabled: disabledByDefault || isDisabled,
        warnings,
        isMultiple: multiple,
        values: values[name],
        subQuestions,
        show,
        multiline: type === questionTypes.TEXT_FIELD ? multiline : false
      };
      break;
    case questionTypes.DROPDOWN:
      props = {
        label: {text: label, number, introduction},
        placeholder,
        name: questionName,
        options,
        disabled: disabledByDefault || isDisabled,
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
        label: {text: label, number, introduction},
        name: questionName,
        options,
        disabled: disabledByDefault || isDisabled,
        isMultiple: multiple,
        warnings,
        values: values[name],
        subQuestions,
        show
      };
      break;
    case questionTypes.DATE:
      props = {
        label: {text: label, number, introduction},
        placeholder,
        name: questionName,
        disabled: disabledByDefault || isDisabled,
        isMultiple: multiple,
        metadata,
        warnings,
        values: values[name],
        subQuestions,
        show
      };
      break;
    case questionTypes.MESSAGE:
      props = {
        message: label,
        show
      };
      break;
    default:
      return props;
  }
  return {props, questionName, jump, questionType: type};
};

export default getQuestionProps;
