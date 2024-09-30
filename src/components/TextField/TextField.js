/* eslint-disable react/jsx-no-duplicate-props */
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import MuiTextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';

import InputLabel from '@/components/InputLabel';
import FieldMessage from '@/components/FieldMessage';
import {formikField, formikForm, label as labelPropTypes} from '@/utils/propTypes';

function TextField({form, field, placeholder, label, disabled, tooltip, warnings, multiline, ...props}) {
  const handleBlur = e => {
    const event = e;
    if (field.onChange && event.target.value) {
      event.target.value = event.target.value.trim();
      field.onChange(e);
    }
  };

  return (
    <Box sx={{width: '100%'}}>
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <MuiTextField
        fullWidth
        id={`field-${field.name}`}
        placeholder={placeholder}
        inputProps={{'data-testid': 'text-field'}}
        InputProps={{
          endAdornment: tooltip && (
            <InputAdornment position="end">
              <Tooltip arrow placement="top" title={tooltip}>
                <Box display="flex" alignItems="center" flexWrap="wrap" px={2}>
                  <HelpIcon fontSize="small" />
                </Box>
              </Tooltip>
            </InputAdornment>
          )
        }}
        {...field}
        onChange={e => {
          field.onChange(e);
          form.setFieldTouched(field.name, false);
        }}
        onBlur={handleBlur}
        {...props}
        disabled={disabled}
        multiline={multiline}
        rows={multiline ? 2 : 1}
        onWheel={e => e.target.blur()}
      />
      <FieldMessage warnings={warnings} form={form} field={field} />
    </Box>
  );
}

TextField.propTypes = {
  field: formikField.isRequired,
  form: formikForm.isRequired,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  label: labelPropTypes.isRequired,
  placeholder: PropTypes.string,
  tooltip: PropTypes.string,
  warnings: PropTypes.shape({})
};

TextField.defaultProps = {
  placeholder: '[Ingrese texto]',
  tooltip: undefined,
  warnings: {},
  disabled: false,
  multiline: false
};

export default TextField;
