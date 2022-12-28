import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {getIn} from 'formik';

import {formikField, formikForm} from '@utils/propTypes';

function ErrorMessage({form, field}) {
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  return error && (touched || form.submitCount > 0) ? (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Typography color="error">{error}</Typography>
    </Box>
  ) : null;
}

ErrorMessage.propTypes = {
  field: formikField.isRequired,
  form: formikForm.isRequired
};

export default ErrorMessage;
