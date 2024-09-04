import {getIn, setIn} from 'formik';

const castErrorsFromYup = yupErrors => {
  let warnings = {};
  if (!yupErrors) {
    return warnings;
  }
  if (yupErrors.inner) {
    if (yupErrors.inner.length === 0) {
      return setIn(warnings, yupErrors.path, yupErrors.message);
    }
    yupErrors.inner.forEach(error => {
      if (!getIn(warnings, error.path)) {
        warnings = setIn(warnings, error.path, error.message);
      }
    });
  }
  return warnings;
};

export default castErrorsFromYup;
