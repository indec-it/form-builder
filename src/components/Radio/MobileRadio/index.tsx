import {FieldInputProps, FormikProps} from 'formik';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import {Label} from '@/lib/definitions';

interface Props {
  disabled: boolean;
  options: {
    value: string | number;
    label: string;
  }[];
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  label: Label;
  warnings: any;
}

function MobileRadio({options, field, disabled, label, form, warnings}: Props) {
  return (
    <Stack direction="column" sx={{width: '100%'}} data-testid="radio">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <Stack direction="column" spacing={2}>
        {options.map((option, index) => (
          <Button
            data-testid={`radio-${index}`}
            key={option.value}
            disabled={disabled}
            variant={option.value === field.value ? 'contained' : 'outlined'}
            onClick={() => {
              form.setFieldValue(field.name, option.value === field.value ? '' : option.value);
              form.setFieldTouched(field.name, false);
            }}
            size="small"
          >
            {option.label}
          </Button>
        ))}
      </Stack>
      <FieldMessage form={form} field={field} warnings={warnings} disabled={disabled} />
    </Stack>
  );
}

export default MobileRadio;
