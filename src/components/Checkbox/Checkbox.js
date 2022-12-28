import PropTypes from 'prop-types';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MuiCheckbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import ErrorMessage from '@components/ErrorMessage';
import defaultMessages from '@constants/defaultMessages';
import formikField from '@utils/propTypes/formikField';
import formikForm from '@utils/propTypes/formikForm';
import optionPropTypes from '@utils/propTypes/option';

const getSelectedOptions = (options, value) => options
  .filter(option => value.includes(option.value))
  .map(selectedOption => selectedOption.label)
  .join(', ') || defaultMessages.UNANSWERED;

const handleChecked = (e, selectedValue, {name, value}, setFieldValue) => {
  if (e.target.checked) {
    setFieldValue(name, [...value, selectedValue]);
  } else {
    const values = value.filter(currentValue => currentValue !== selectedValue);
    setFieldValue(name, values);
  }
};

function Checkbox({
  options, label, field, form, readOnlyMode, required
}) {
  return (
    <>
      <InputLabel required={required}>{label}</InputLabel>
      {readOnlyMode ? (
        <Typography>
          {getSelectedOptions(options, field.value)}
        </Typography>
      ) : (
        <FormGroup>
          {options.map(option => (
            <FormControlLabel
              key={option.value}
              control={(
                <MuiCheckbox
                  checked={field.value.includes(option.value)}
                  onChange={e => handleChecked(e, option.value, field, form.setFieldValue)}
                />
              )}
              label={option.label}
            />
          ))}
        </FormGroup>
      )}
      <ErrorMessage form={form} field={field} />
    </>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(optionPropTypes).isRequired,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  readOnlyMode: PropTypes.bool.isRequired,
  required: PropTypes.bool.isRequired
};

export default Checkbox;
