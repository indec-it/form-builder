import PropTypes from 'prop-types';
import MuiRadio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import {getIn} from 'formik';

import {formikField, formikForm} from '@utils/propTypes';

function Radio({
  options, field, form, label
}) {
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  return (
    <FormControl>
      <Typography>{label}</Typography>
      <RadioGroup {...field}>
        {options.map(option => (
          <FormControlLabel key={option.value} value={option.value} control={<MuiRadio />} label={option.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

Radio.propTypes = {
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
