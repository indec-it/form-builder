/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import MuiTextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';

import InputLabel from '@components/InputLabel';
import FieldMessage from '@components/FieldMessage';
import defaultMessages from '@constants/defaultMessages';
import {formikField, formikForm} from '@utils/propTypes';

function TextField({
  form, field, placeholder, label, readOnlyMode, tooltip, required, warnings, ...props
}) {
  return (
    <Box sx={{width: '100%'}}>
      <InputLabel warnings={warnings} required={required} form={form} field={field} label={label} readOnly={readOnlyMode} />
      {readOnlyMode ? (
        <Typography>{field.value || defaultMessages.UNANSWERED}</Typography>
      ) : (
        <MuiTextField
          fullWidth
          id={`field-${field.name}`}
          placeholder={placeholder}
          InputProps={{
            endAdornment: tooltip && (
              <InputAdornment position="end">
                <Tooltip
                  arrow
                  placement="top"
                  title={tooltip}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    flexWrap="wrap"
                    px={2}
                  >
                    <HelpIcon fontSize="small" />
                  </Box>
                </Tooltip>
              </InputAdornment>
            )
          }}
          {...field}
          {...props}
          value={field.value || ''}
        />
      )}
      <FieldMessage warnings={warnings} form={form} field={field} readOnly={readOnlyMode} />
    </Box>
  );
}

TextField.propTypes = {
  field: formikField.isRequired,
  form: formikForm.isRequired,
  readOnlyMode: PropTypes.bool.isRequired,
  required: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  tooltip: PropTypes.string,
  warnings: PropTypes.shape({}).isRequired
};

TextField.defaultProps = {
  placeholder: '[Ingrese texto]',
  tooltip: undefined
};

export default TextField;
