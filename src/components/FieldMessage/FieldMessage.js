import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';

import {formikField, formikForm} from '@/utils/propTypes';
import hasFormikErrorsAndWarnings from '@/utils/hasFormikErrorsAndWarnings';

const alertStyles = {justifyContent: 'center', mt: 2};

function FieldMessage({
  form, field, readOnly, warnings
}) {
  const {
    hasWarning, warning, hasError, error
  } = hasFormikErrorsAndWarnings({form, field, warnings});
  if (hasError && !readOnly) {
    return (
      <Alert severity="error" sx={alertStyles}>{error}</Alert>
    );
  }
  if (hasWarning && !readOnly) {
    return (
      <Alert severity="warning" sx={alertStyles}>{warning}</Alert>
    );
  }
  return null;
}

FieldMessage.propTypes = {
  field: formikField.isRequired,
  form: formikForm.isRequired,
  readOnly: PropTypes.bool.isRequired,
  warnings: PropTypes.shape({}).isRequired
};

export default FieldMessage;
