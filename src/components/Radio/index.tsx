import {FieldInputProps, FormikProps} from 'formik';
import IconButton from '@mui/material/IconButton';
import MuiRadio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import breakpoints from '@/constants/breakpoints';
import {useBreakpoint} from '@/hooks';
import {Label} from '@/lib/definitions';

import MobileRadio from './MobileRadio';

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

function Radio({options, field, disabled = false, label, form, warnings}: Props) {
  const {breakpoint} = useBreakpoint();
  return breakpoint === breakpoints.EXTRA_SMALL ? (
    <MobileRadio options={options} field={field} disabled={disabled} label={label} form={form} warnings={warnings} />
  ) : (
    <Stack direction="column" sx={{width: '100%'}} data-testid="radio">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <RadioGroup
        {...field}
        onBlur={form.handleBlur}
        onChange={e => {
          field.onChange(e);
          form.setFieldTouched(field.name, false);
        }}
      >
        {options.map((option, index) => (
          <Stack key={option.value} direction="row">
            <FormControlLabel
              data-testid={`radio-${index}`}
              value={option.value}
              control={<MuiRadio sx={{display: 'none'}} />}
              label={option.label}
              disabled={disabled}
              checked={option.value === field.value}
              sx={{
                border: 1,
                borderRadius: 2,
                p: 2,
                mb: 2,
                backgroundColor: option.value === field.value ? '#2563eb' : '#eef2ff',
                width: '100%'
              }}
            />
            {option.value === field.value && !disabled && (
              <IconButton
                onClick={() => form.setFieldValue(field.name, '')}
                color="error"
                data-testid={`clean-option-${index}`}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </Stack>
        ))}
      </RadioGroup>
      <FieldMessage form={form} field={field} warnings={warnings} disabled={disabled} />
    </Stack>
  );
}

export default Radio;
