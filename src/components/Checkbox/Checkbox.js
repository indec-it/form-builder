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
  options, label, field, form, readOnlyMode, required, warnings
}) {
  return (
    <Stack direction="column" spacing={2} sx={{width: '100%'}}>
      <InputLabel warnings={warnings} required={required} form={form} field={field} label={label} readOnly={readOnlyMode} />
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
            disabled={readOnlyMode}
          />
        ))}
      </FormGroup>
      <FieldMessage warnings={warnings} form={form} field={field} readOnly={readOnlyMode} />
    </Stack>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(optionPropTypes).isRequired,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  readOnlyMode: PropTypes.bool.isRequired,
  required: PropTypes.bool.isRequired,
  warnings: PropTypes.shape({}).isRequired
};

export default Checkbox;
