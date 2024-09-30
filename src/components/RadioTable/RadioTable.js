import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import MuiRadio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import {formikField, formikForm, label as labelPropTypes} from '@/utils/propTypes';
import optionPropTypes from '@/utils/propTypes/option';

function RadioTable({options, label, form, field, disabled, warnings}) {
  const handleChange = (e, option, subOption) => {
    let value;
    if (subOption.exclusive) {
      value = options.reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue.name]: option.id === currentValue.id ? e.target.value : undefined
        }),
        {}
      );
    } else {
      const exclusiveOptions = options.reduce((acc, currentValue) => {
        if (currentValue.subOptions.some(currentSubOption => currentSubOption.exclusive)) {
          acc[currentValue.name] = currentValue.subOptions.filter(currentSubOption => currentSubOption.exclusive);
        }
        return acc;
      }, {});
      value = {...field.value, [option.name]: e.target.value};
      Object.keys(value).forEach(key => {
        if (exclusiveOptions[key] && exclusiveOptions[key].some(currentSubOption => currentSubOption.value === value[key])) {
          value[key] = undefined;
        }
      });
    }
    form.setFieldValue(field.name, value);
    form.setFieldTouched(field.name, false);
  };

  return (
    <Stack direction="column">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      {options.map(option => (
        <Box key={option.id}>
          <Stack direction={{xs: 'column', sm: 'row'}} spacing={2}>
            <Box sx={{minWidth: '400px', maxWidth: '400px', overflow: 'hidden'}}>
              <Typography sx={{opacity: disabled ? 0.5 : 1, whiteSpace: 'normal'}}>{option.title}</Typography>
            </Box>
            <Stack direction="row" flexWrap="wrap">
              {option.subOptions.map(subOption => (
                <FormControlLabel
                  key={subOption.value}
                  data-testid={`subOption-${option.id}-${subOption.id}`}
                  value={subOption.value}
                  control={
                    <MuiRadio
                      checked={subOption.value === field.value[option.name]}
                      onChange={e => handleChange(e, option, subOption)}
                    />
                  }
                  label={subOption.label}
                  disabled={disabled}
                />
              ))}
              {field.value[option.name] && !disabled && (
                <IconButton
                  onClick={() => form.setFieldValue(`${field.name}.${option.name}`, undefined)}
                  color="error"
                  data-testid={`clean-option-${option.id}`}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Box>
      ))}
      <FieldMessage warnings={warnings} form={form} field={field} />
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
