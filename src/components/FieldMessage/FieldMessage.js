import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

import {formikField, formikForm} from '@utils/propTypes';
import hasFormikErrors from '@utils/hasFormikErrors';
import hasFormikWarnings from '@utils/hasFormikWarnings';

function FieldMessage({
  form, field, readOnly, warnings
}) {
  const {hasError, error} = hasFormikErrors({form, field});
  const {hasWarning, warning} = hasFormikWarnings({form, field, warnings});
  if (hasError && !readOnly) {
    return (
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }
  if (hasWarning && !readOnly) {
    return (
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Alert severity="warning">{warning}</Alert>
      </Box>
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
