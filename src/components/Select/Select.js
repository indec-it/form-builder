import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';

import {formikField, formikForm} from '@utils/propTypes';

import TextField from '../TextField';

function Select({
  options, field, label, form, required, loading, onClean, placeholder, ...props
}) {
  const handleChange = selectedValue => {
    form.setFieldValue(field.name, selectedValue.id);
    onClean(form);
  };
  const selectedValue = options.find(option => option.id === field.value) || {};

  return (
    <Autocomplete
      {...props}
      disableClearable
      options={options}
      fullWidth
      noOptionsText="No hay opciones."
      renderInput={params => (
        <TextField
          {...params}
          form={form}
          label={label}
          required={required}
          field={{name: field.name}}
          placeholder={placeholder}
        />
      )}
      name={field.name}
      onChange={(event, newValue) => handleChange(newValue)}
      loading={loading}
      getOptionLabel={option => option.label || ''}
      value={selectedValue}
    />
  );
}

Select.propTypes = {
  onClean: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  label: PropTypes.string.isRequired,
  loadingText: PropTypes.string,
  placeholder: PropTypes.string,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  required: PropTypes.bool,
  loading: PropTypes.bool
};

Select.defaultProps = {
  options: [],
  loadingText: 'Cargando...',
  required: false,
  loading: false,
  onClean: () => {},
  placeholder: '[Seleccione]'
};

export default Select;
