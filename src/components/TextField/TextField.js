import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import MuiTextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';

import InputLabel from '@/components/InputLabel';
import FieldMessage from '@/components/FieldMessage';

function TextField({
  form,
  field,
  placeholder = '[Ingrese texto]',
  label,
  disabled = false,
  tooltip,
  warnings = {},
  multiline = false,
  ...props
}) {
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
        slotProps={{
          input: {
            endAdornment: tooltip && (
              <InputAdornment position="end">
                <Tooltip arrow placement="top" title={tooltip}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      px: 2
                    }}
                  >
                    <HelpIcon fontSize="small" />
                  </Box>
                </Tooltip>
              </InputAdornment>
            )
          }
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

export default TextField;
