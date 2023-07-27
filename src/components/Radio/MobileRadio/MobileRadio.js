import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';

import {formikField, formikForm} from '@/utils/propTypes';

function MobileRadio({
  options, field, disabled, label, required, form, warnings
}) {
  return (
    <Stack direction="column" spacing={2} sx={{width: '100%'}} data-testid="radio">
      <InputLabel warnings={warnings} required={required} form={form} field={field} label={label} disabled={disabled} />
      {options.map((option, index) => (
        <Button
          data-testid={`radio-${index}`}
          key={option.value}
          disabled={disabled}
          variant={option.value === field.value ? 'contained' : 'outlined'}
          sx={{justifyContent: 'flex-start'}}
          onClick={() => form.setFieldValue(field.name, option.value)}
        >
          {option.label}
        </Button>
      ))}
      <FieldMessage form={form} field={field} warnings={warnings} disabled={disabled} />
    </Stack>
  );
}

MobileRadio.propTypes = {
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  warnings: PropTypes.shape({})
};

MobileRadio.defaultProps = {
  warnings: {},
  required: false,
  disabled: false
};

export default MobileRadio;
