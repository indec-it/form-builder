import defaultMessages from '@constants/defaultMessages';

const getSelectedOptionLabel = (options, selectedOption, key = 'value') => options.find(
  option => option[key] === selectedOption
)?.label || defaultMessages.UNANSWERED;

export default getSelectedOptionLabel;
