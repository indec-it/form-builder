import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiRadio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import formikField from '@/utils/propTypes/formikField';
import formikForm from '@/utils/propTypes/formikForm';
import optionPropTypes from '@/utils/propTypes/option';
import getSelectedOptionLabel from '@/utils/getSelectedOptionLabel';

function RadioTable({
  options, label, form, field, readOnlyMode, required, warnings
}) {
  return (
    <>
      <InputLabel warnings={warnings} required={required} form={form} field={field} label={label} readOnly={readOnlyMode} />
      {readOnlyMode ? (
        <>
          {options.map(option => (
            <Box key={option.id}>
              <Stack direction={{xs: 'column', sm: 'row'}} spacing={5}>
                <Box sx={{width: '400px'}}>
                  <Typography>{option.title}</Typography>
                </Box>
                <Typography>{getSelectedOptionLabel(option.subOptions, field.value[option.name])}</Typography>
              </Stack>
            </Box>
          ))}
        </>
      ) : (
        <>
          {options.map(option => (
            <Box key={option.id}>
              <Stack direction="row" spacing={5} alignItems="center">
                <Box sx={{width: '400px'}}>
                  <Typography>{option.title}</Typography>
                </Box>
                <RadioGroup row>
                  {option.subOptions.map(subOption => (
                    <FormControlLabel
                      key={subOption.value}
                      value={subOption.value}
                      control={(
                        <MuiRadio
                          checked={subOption.value === field.value[option.name]}
                          onChange={
                            e => form.setFieldValue(`${field.name}.${option.name}`, e.target.value)
                          }
                        />
                      )}
                      label={subOption.label}
                    />
                  ))}
                </RadioGroup>
              </Stack>
              <FieldMessage
                warnings={warnings}
                form={form}
                field={{...field, name: `${field.name}.${option.name}`}}
                readOnly={readOnlyMode}
              />
            </Box>
          ))}
        </>
      )}
    </>
  );
}

RadioTable.propTypes = {
  field: formikField.isRequired,
  form: formikForm.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subOptions: PropTypes.arrayOf(
        optionPropTypes
      )
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  readOnlyMode: PropTypes.bool.isRequired,
  required: PropTypes.bool.isRequired,
  warnings: PropTypes.shape({})
};

RadioTable.defaultProps = {
  warnings: {}
};

export default RadioTable;
