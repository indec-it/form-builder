import {FieldInputProps, FormikProps} from 'formik';
import Alert from '@mui/material/Alert';

import hasFormikErrorsAndWarnings from '@/utils/hasFormikErrorsAndWarnings';

const alertStyles = {justifyContent: 'center', mt: 2};

interface Props {
  form: FormikProps<any>;
  field: FieldInputProps<any>;
  disabled: boolean;
  warnings: any;
}

function FieldMessage({form, field, disabled, warnings}: Props) {
  const {hasWarning, warning, hasError, error} = hasFormikErrorsAndWarnings({form, field, warnings});
  if (hasError && !disabled) {
    return (
      <Alert severity="error" sx={alertStyles}>
        {error}
      </Alert>
    );
  }
  if (hasWarning && !disabled) {
    return (
      <Alert severity="warning" sx={alertStyles}>
        {warning}
      </Alert>
    );
  }
  return null;
}

export default FieldMessage;
