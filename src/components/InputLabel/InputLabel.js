import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import MuiInputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';

import hasFormikErrorsAndWarnings from '@/utils/hasFormikErrorsAndWarnings';
import formikFormPropTypes from '@/utils/propTypes/formikForm';
import formikFieldPropTypes from '@/utils/propTypes/formikField';

function InputLabel({
  required, label, form, field, disabled, warnings
}) {
  const {hasWarning, hasError} = hasFormikErrorsAndWarnings({form, field, warnings});
  return (
    <Stack direction="row" spacing={2} data-testid="input-label">
      {hasError && !disabled && (
        <Box>
          <ErrorIcon color="error" data-testid="error-icon" />
        </Box>
      )}
      {hasWarning && !disabled && !hasError && (
        <Box>
          <WarningIcon color="warning" data-testid="warning-icon" />
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
  disabled: PropTypes.bool.isRequired,
  warnings: PropTypes.shape({})
};

InputLabel.defaultProps = {
  warnings: {}
};

export default InputLabel;
