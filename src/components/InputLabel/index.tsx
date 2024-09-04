import {FieldInputProps, FormikProps} from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';

import hasFormikErrorsAndWarnings from '@/utils/hasFormikErrorsAndWarnings';
import {Label} from '@/lib/definitions';

interface Props {
  label: Label['label'];
  form: FormikProps<any>;
  field: FieldInputProps<any>;
  disabled: boolean;
  warnings: any;
}

function InputLabel({label, form, field, disabled, warnings}: Props) {
  const {hasWarning, hasError} = hasFormikErrorsAndWarnings({form, field, warnings});
  const labelNumber = label.number ? `${label.number} - ` : '';

  return (
    <>
      <Stack direction="row" spacing={2} data-testid="input-label">
        <Stack direction="row" sx={{opacity: !disabled ? 1 : 0.3, mb: 0.5, alignItems: 'center'}}>
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
      {label.introduction && <Typography sx={{fontWeight: 'bold', color: 'gray'}}>{label.introduction}</Typography>}
    </>
  );
}

export default InputLabel;
