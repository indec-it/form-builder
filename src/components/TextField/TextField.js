/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import MuiTextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import {getIn} from 'formik';

import defaultMessages from '@constants/defaultMessages';
import {formikField, formikForm} from '@utils/propTypes';

function TextField({
  form, field, placeholder, label, readOnlyMode, tooltip, ...props
}) {
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  return (
    <Box sx={{width: '100%'}}>
      <Box mb={0.5}>
        <Typography>{label}</Typography>
      </Box>
      {readOnlyMode ? (
        <Typography>{field.value || defaultMessages.UNANSWERED}</Typography>
      ) : (
        <MuiTextField
          error={(form.submitCount > 0 || touched) && Boolean(error)}
          helperText={(form.submitCount > 0 || touched) && error}
          fullWidth
          {...field}
          {...props}
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
        />
      )}
    </Box>
  );
}

TextField.propTypes = {
  field: formikField.isRequired,
  form: formikForm.isRequired,
  readOnlyMode: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  tooltip: PropTypes.string
};

TextField.defaultProps = {
  placeholder: '[Ingrese texto]',
  tooltip: undefined
};

export default TextField;
