import {useMemo} from 'react';
import Autocomplete from '@mui/material/Autocomplete';

import TextField from '../TextField';

function Select({
  options = [],
  field,
  label,
  form,
  loading = false,
  onClean,
  placeholder = '[Seleccione]',
  disabled = false,
  keyValue = 'value',
  warnings = {}
}) {
  const handleChange = selectedValue => {
    form.setFieldValue(field.name, selectedValue ? selectedValue[keyValue] : undefined);
    form.setFieldTouched(field.name, false);
    if (onClean) {
      onClean(form);
    }
  };
  const selectedValue = useMemo(() => options.find(option => option[keyValue] === field.value) || {}, [field?.value]);

  return (
    <Autocomplete
      disableClearable={false}
      options={options}
      fullWidth
      noOptionsText="No hay opciones."
      clearText="Limpiar"
      closeText="Cerrar"
      openText="Abrir"
      renderInput={params => (
        <TextField
          {...params}
          form={form}
          label={label}
          field={{name: field.name}}
          placeholder={placeholder}
          disabled={disabled}
          warnings={warnings}
        />
      )}
      {...field}
      value={selectedValue}
      getOptionLabel={option => option.label || ''}
      onChange={(_, newValue) => handleChange(newValue)}
      loading={loading}
      disabled={disabled}
      isOptionEqualToValue={(option, value) => option[keyValue] === value}
      onBlur={form.handleBlur}
    />
  );
}

export default Select;
