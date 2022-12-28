import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {formikField, formikForm} from '@utils/propTypes';
import hasFormikErrors from '@utils/hasFormikErrors';

function ErrorMessage({form, field, readOnly}) {
  const {hasError, error} = hasFormikErrors({form, field});
  return hasError && !readOnly ? (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Typography color="error">{error}</Typography>
    </Box>
  ) : null;
}

ErrorMessage.propTypes = {
  field: formikField.isRequired,
  form: formikForm.isRequired,
  readOnly: PropTypes.bool.isRequired
};

export default ErrorMessage;
