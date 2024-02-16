import {getIn} from 'formik';

const hasFormikErrorsAndWarnings = ({form, field, warnings = {}}) => {
  const warning = getIn(warnings, field.name);
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  const formSubmittedOrTouched = form.submitCount > 0 && touched;
  return {
    hasError: formSubmittedOrTouched || (touched && error) ? !!error : false,
    error,
    hasWarning: !!warning,
    warning
  };
};

export default hasFormikErrorsAndWarnings;
