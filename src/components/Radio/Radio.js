import PropTypes from 'prop-types';
import MuiRadio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';

import ErrorMessage from '@components/ErrorMessage';

import {formikField, formikForm} from '@utils/propTypes';
import getSelectedOptionLabel from '@utils/getSelectedOptionLabel';

function Radio({
  options, field, readOnlyMode, label, required, form
}) {
  return (
    <>
      <InputLabel required={required}>{label}</InputLabel>
      {readOnlyMode ? (
        <Typography>{getSelectedOptionLabel(options, field.value)}</Typography>
      ) : (
        <RadioGroup {...field}>
          {options.map(option => (
            <FormControlLabel key={option.value} value={option.value} control={<MuiRadio />} label={option.label} />
          ))}
        </RadioGroup>
      )}
      <ErrorMessage form={form} field={field} />
    </>
  );
}

Radio.propTypes = {
  readOnlyMode: PropTypes.bool.isRequired,
  required: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Radio;
