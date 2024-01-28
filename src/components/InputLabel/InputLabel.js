import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';

import hasFormikErrorsAndWarnings from '@/utils/hasFormikErrorsAndWarnings';
import formikFormPropTypes from '@/utils/propTypes/formikForm';
import formikFieldPropTypes from '@/utils/propTypes/formikField';
import labelPropTypes from '@/utils/propTypes/label';

function InputLabel({label, form, field, disabled, warnings}) {
  const {hasWarning, hasError} = hasFormikErrorsAndWarnings({form, field, warnings});
  const labelNumber = label.number ? `${label.number} - ` : '';

  return (
    <>
      <Stack direction="row" spacing={2} data-testid="input-label">
        <Stack direction="row" mb={0.5} alignItems="center" sx={{opacity: !disabled ? 1 : 0.3}}>
          <Typography sx={{fontWeight: 'bold', fontSize: '17px'}}>
            {`${labelNumber}${label.text}`} {hasError && '*'}
          </Typography>
        </Stack>
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
      </Stack>
      {label.introduction && (
        <Typography fontWeight="bold" color="gray">
          {label.introduction}
        </Typography>
      )}
    </>
  );
}

InputLabel.propTypes = {
  label: labelPropTypes.isRequired,
  form: formikFormPropTypes.isRequired,
  field: formikFieldPropTypes.isRequired,
  disabled: PropTypes.bool.isRequired,
  warnings: PropTypes.shape({})
};

InputLabel.defaultProps = {
  warnings: {}
};

export default InputLabel;
