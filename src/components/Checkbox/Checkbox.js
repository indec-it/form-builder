import PropTypes from 'prop-types';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import formikField from '@/utils/propTypes/formikField';
import formikForm from '@/utils/propTypes/formikForm';
import labelPropTypes from '@/utils/propTypes/label';
import optionPropTypes from '@/utils/propTypes/option';

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

function Checkbox({options, label, field, form, disabled, warnings}) {
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
              />
            }
            label={option.label}
            disabled={disabled}
          />
        ))}
      </FormGroup>
      <FieldMessage warnings={warnings} form={form} field={field} />
    </Stack>
  );
}

Checkbox.propTypes = {
  label: labelPropTypes.isRequired,
  options: PropTypes.arrayOf(optionPropTypes).isRequired,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  disabled: PropTypes.bool,
  warnings: PropTypes.shape({}).isRequired
};

Checkbox.defaultProps = {
  disabled: false
};

export default Checkbox;
