import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';

function MobileRadio({options, field, disabled = false, label, form, warnings = {}}) {
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
      <FieldMessage form={form} field={field} warnings={warnings} />
    </Stack>
  );
}

export default MobileRadio;
