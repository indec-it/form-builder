import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiRadio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import {formikField, formikForm, label as labelPropTypes} from '@/utils/propTypes';
import optionPropTypes from '@/utils/propTypes/option';

function RadioTable({options, label, form, field, disabled, warnings}) {
  return (
    <Stack direction="column" sx={{width: '100%'}}>
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      {options.map(option => (
        <Box key={option.id}>
          <Stack direction="row" spacing={5} alignItems="center">
            <Box sx={{width: '400px'}}>
              <Typography sx={{opacity: disabled ? 0.5 : 1}}>{option.title}</Typography>
            </Box>
            <RadioGroup row>
              {option.subOptions.map(subOption => (
                <FormControlLabel
                  key={subOption.value}
                  data-testid={`subOption-${option.id}-${subOption.id}`}
                  value={subOption.value}
                  control={
                    <MuiRadio
                      checked={subOption.value === field.value[option.name]}
                      onChange={e => {
                        form.setFieldValue(`${field.name}.${option.name}`, e.target.value);
                        form.setFieldTouched(field.name, false);
                      }}
                    />
                  }
                  label={subOption.label}
                  disabled={disabled}
                />
              ))}
            </RadioGroup>
          </Stack>
        </Box>
      ))}
      <FieldMessage warnings={warnings} form={form} field={field} disabled={disabled} />
    </Stack>
  );
}

RadioTable.propTypes = {
  field: formikField.isRequired,
  form: formikForm.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subOptions: PropTypes.arrayOf(optionPropTypes)
    })
  ).isRequired,
  label: labelPropTypes.isRequired,
  disabled: PropTypes.bool,
  warnings: PropTypes.shape({})
};

RadioTable.defaultProps = {
  warnings: {},
  disabled: false
};

export default RadioTable;
