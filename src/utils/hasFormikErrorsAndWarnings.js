import {getIn} from 'formik';

const hasFormikErrorsAndWarnings = ({form, field, warnings = {}}) => {
  const warning = getIn(warnings, field.name);
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  const formSubmittedOrTouched = form.submitCount > 0 && touched;
  if (formSubmittedOrTouched || (touched && (error || warning))) {
    return {
      hasError: !!error,
      error,
      hasWarning: !!warning,
      warning
    };
  }
  return {
    hasError: false,
    hasWarning: false
  };
};

export default hasFormikErrorsAndWarnings;
