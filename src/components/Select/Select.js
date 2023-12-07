import {useMemo} from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';

import {formikField, formikForm, label as labelPropTypes} from '@/utils/propTypes';

import TextField from '../TextField';

function Select({
  options, field, label, form, loading, onClean, placeholder, disabled, keyValue, warnings, ...props
}) {
  const handleChange = selectedValue => {
    form.setFieldValue(field.name, selectedValue ? selectedValue[keyValue] : undefined);
    form.setFieldTouched(field.name, false);
    onClean(form);
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
      {...props}
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
      name={field.name}
      onChange={(_, newValue) => handleChange(newValue)}
      loading={loading}
      getOptionLabel={option => option.label || ''}
      value={selectedValue}
      disabled={disabled}
      onBlur={form.handleBlur}
    />
  );
}

Select.propTypes = {
  onClean: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string
    })
  ),
  label: labelPropTypes.isRequired,
  loadingText: PropTypes.string,
  placeholder: PropTypes.string,
  keyValue: PropTypes.string,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  warnings: PropTypes.shape({})
};

Select.defaultProps = {
  options: [],
  loadingText: 'Cargando...',
  loading: false,
  disabled: false,
  onClean: () => {},
  placeholder: '[Seleccione]',
  keyValue: 'value',
  warnings: {}
};

export default Select;
