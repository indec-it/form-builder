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

function TextField({form, field, placeholder, label, disabled, tooltip, warnings, ...props}) {
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
        {...props}
        disabled={disabled}
        onBlur={form.handleBlur}
      />
      <FieldMessage warnings={warnings} form={form} field={field} disabled={disabled} />
    </Box>
  );
}

TextField.propTypes = {
  field: formikField.isRequired,
  form: formikForm.isRequired,
  disabled: PropTypes.bool,
  label: labelPropTypes.isRequired,
  placeholder: PropTypes.string,
  tooltip: PropTypes.string,
  warnings: PropTypes.shape({})
};

TextField.defaultProps = {
  placeholder: '[Ingrese texto]',
  tooltip: undefined,
  warnings: {},
  disabled: false
};

export default TextField;
