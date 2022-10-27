/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import MuiTextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {getIn} from 'formik';

import {formikField, formikForm} from '@utils/propTypes';

function TextField({
  form, field, placeholder, label, ...props
}) {
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  return (
    <>
      <Box mb={0.5}>
        <Typography>{label}</Typography>
      </Box>
      <MuiTextField
        error={(form.submitCount > 0 || touched) && Boolean(error)}
        helperText={(form.submitCount > 0 || touched) && error}
        fullWidth
        {...field}
        {...props}
        id={`field-${field.name}`}
        placeholder={placeholder}
      />
    </>
  );
}

TextField.propTypes = {
  field: formikField.isRequired,
  form: formikForm.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

TextField.defaultProps = {
  placeholder: '[Ingrese texto]'
};

export default TextField;
