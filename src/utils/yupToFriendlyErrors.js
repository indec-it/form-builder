import {getIn, setIn} from 'formik';

const yupToFriendlyErrors = yupErrors => {
  let warnings = {};
  if (!yupErrors) {
    return warnings;
  }
  if (yupErrors.inner) {
    if (yupErrors.inner.length === 0) {
      return setIn(warnings, yupErrors.path, yupErrors.message);
    }
    for (const err of yupErrors.inner) {
      if (!getIn(warnings, err.path)) {
        const {path} = err;
        warnings = setIn(warnings, path, err.message);
      }
    }
  }
  return warnings;
};

export default yupToFriendlyErrors;
