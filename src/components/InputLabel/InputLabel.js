import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import MuiInputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import ErrorIcon from '@mui/icons-material/Error';

import hasFormikErrors from '@utils/hasFormikErrors';
import formikFormPropTypes from '@utils/propTypes/formikForm';
import formikFieldPropTypes from '@utils/propTypes/formikField';

function InputLabel({
  required, label, form, field, readOnly
}) {
  const {hasError} = hasFormikErrors({form, field});
  return (
    <Stack direction="row" spacing={2}>
      {hasError && !readOnly && (
        <Box>
          <ErrorIcon color="error" />
        </Box>
      )}
      <Box mb={0.5}>
        <MuiInputLabel required={required}>{label}</MuiInputLabel>
      </Box>
    </Stack>
  );
}

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  form: formikFormPropTypes.isRequired,
  field: formikFieldPropTypes.isRequired,
  readOnly: PropTypes.bool.isRequired
};

export default InputLabel;
