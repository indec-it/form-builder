import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';

import {formikField, formikForm, label as labelPropTypes} from '@/utils/propTypes';

function MobileRadio({options, field, disabled, label, form, warnings}) {
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

MobileRadio.propTypes = {
  disabled: PropTypes.bool,
  label: labelPropTypes.isRequired,
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
  disabled: false
};

export default MobileRadio;
