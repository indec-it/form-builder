import PropTypes from 'prop-types';
import MuiRadio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';

import {formikField, formikForm} from '@/utils/propTypes';
import getSelectedOptionLabel from '@/utils/getSelectedOptionLabel';

function Radio({
  options, field, readOnlyMode, label, required, form, warnings
}) {
  return (
    <>
      <InputLabel warnings={warnings} required={required} form={form} field={field} label={label} readOnly={readOnlyMode} />
      {readOnlyMode ? (
        <Typography>{getSelectedOptionLabel(options, field.value)}</Typography>
      ) : (
        <RadioGroup row {...field}>
          {options.map(option => (
            <FormControlLabel key={option.value} value={option.value} control={<MuiRadio />} label={option.label} />
          ))}
        </RadioGroup>
      )}
      <FieldMessage form={form} field={field} warnings={warnings} readOnly={readOnlyMode} />
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
  ).isRequired,
  warnings: PropTypes.shape({}).isRequired
};

export default Radio;
