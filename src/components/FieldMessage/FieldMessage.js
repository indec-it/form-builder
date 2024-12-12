import Alert from '@mui/material/Alert';

import hasFormikErrorsAndWarnings from '@/utils/hasFormikErrorsAndWarnings';

const alertStyles = {justifyContent: 'center', mt: 2};

function FieldMessage({form, field, warnings}) {
  const {hasWarning, warning, hasError, error} = hasFormikErrorsAndWarnings({form, field, warnings});
  if (hasError) {
    return (
      <Alert severity="error" sx={alertStyles}>
        {error}
      </Alert>
    );
  }
  if (hasWarning) {
    return (
      <Alert severity="warning" sx={alertStyles}>
        {warning}
      </Alert>
    );
  }
  return null;
}

export default FieldMessage;
