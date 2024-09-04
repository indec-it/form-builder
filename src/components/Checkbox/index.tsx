import {FieldInputProps, FormikProps} from 'formik';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';

import {Label, Option} from '@/lib/definitions';

const handleChecked = (e, options, selectedOption, {name, value}, setFieldValue) => {
  const {value: selectedValue, exclusive} = selectedOption;
  const isChecked = e.target.checked;
  let values;
  const exclusiveOptions = options.filter(option => option.exclusive);
  if (isChecked) {
    if (exclusive) {
      values = [selectedValue];
    } else {
      const nonExclusiveOptions =
        exclusiveOptions.length > 0
          ? value.filter(
              currentValue => !exclusiveOptions.map(exclusiveOption => exclusiveOption.value).includes(currentValue)
            )
          : value;
      values = [...nonExclusiveOptions, selectedValue];
    }
  } else {
    values = value.filter(currentValue => currentValue !== selectedValue);
  }
  setFieldValue(name, values);
};

type Value = string[];

interface Props {
  options: Option[];
  disabled: boolean;
  label: Label;
  field: FieldInputProps<Value>;
  form: FormikProps<Value>;
  warnings: any;
}

function Checkbox({options, label, field, form, disabled = false, warnings}: Props) {
  return (
    <Stack direction="column" sx={{width: '100%'}}>
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <FormGroup>
        {options.map((option, index) => (
          <FormControlLabel
            key={option.value}
            data-testid={`checkbox-${index}`}
            control={
              <MuiCheckbox
                data-testid={`option-${index}`}
                checked={field.value.includes(option.value)}
                onChange={e => {
                  handleChecked(e, options, option, field, form.setFieldValue);
                  form.setFieldTouched(field.name, false);
                }}
                sx={{display: 'none'}}
              />
            }
            label={option.label}
            disabled={disabled}
            sx={{
              border: 1,
              borderRadius: 2,
              p: 2,
              mb: 2,
              backgroundColor: field.value.includes(option.value) ? '#2563eb' : '#eef2ff'
            }}
          />
        ))}
      </FormGroup>
      <FieldMessage warnings={warnings} form={form} field={field} disabled={disabled} />
    </Stack>
  );
}

export default Checkbox;
