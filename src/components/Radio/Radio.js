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

import MobileRadio from './MobileRadio';

function Radio({options, field, disabled = false, label, form, warnings = {}}) {
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
              control={<MuiRadio />}
              label={option.label}
              disabled={disabled}
              checked={option.value === field.value}
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
      <FieldMessage form={form} field={field} warnings={warnings} />
    </Stack>
  );
}

export default Radio;
