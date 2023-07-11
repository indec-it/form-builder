import PropTypes from 'prop-types';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import formikField from '@/utils/propTypes/formikField';
import formikForm from '@/utils/propTypes/formikForm';
import optionPropTypes from '@/utils/propTypes/option';

const handleChecked = (e, selectedValue, {name, value}, setFieldValue) => {
  const isChecked = e.target.checked;
  const values = isChecked
    ? [...value, selectedValue]
    : value.filter(currentValue => currentValue !== selectedValue);
  setFieldValue(name, values);
};

function Checkbox({
  options, label, field, form, disabled, required, warnings
}) {
  return (
    <Stack direction="column" spacing={2} sx={{width: '100%'}}>
      <InputLabel warnings={warnings} required={required} form={form} field={field} label={label} disabled={disabled} />
      <FormGroup>
        {options.map((option, index) => (
          <FormControlLabel
            key={option.value}
            data-testid={`checkbox-${index}`}
            control={(
              <MuiCheckbox
                data-testid={`option-${index}`}
                checked={field.value.includes(option.value)}
                onChange={e => handleChecked(e, option.value, field, form.setFieldValue)}
              />
            )}
            label={option.label}
            disabled={disabled}
          />
        ))}
      </FormGroup>
      <FieldMessage warnings={warnings} form={form} field={field} disabled={disabled} />
    </Stack>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(optionPropTypes).isRequired,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  warnings: PropTypes.shape({}).isRequired
};

Checkbox.defaultProps = {
  required: false,
  disabled: false
};

export default Checkbox;
