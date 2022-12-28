import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';

import InputLabel from '@components/InputLabel';
import {formikField, formikForm} from '@utils/propTypes';
import getSelectedOptionLabel from '@utils/getSelectedOptionLabel';

import TextField from '../TextField';

function Select({
  options, field, label, form, required, loading, onClean, placeholder, readOnlyMode, keyValue, ...props
}) {
  const handleChange = selectedValue => {
    form.setFieldValue(field.name, selectedValue[keyValue]);
    onClean(form);
  };
  const selectedValue = options.find(option => option[keyValue] === field.value) || {};

  return readOnlyMode ? (
    <>
      <InputLabel required={required} form={form} field={field} label={label} readOnly={readOnlyMode} />
      <Typography>
        <Typography>{getSelectedOptionLabel(options, field.value)}</Typography>
      </Typography>
    </>
  ) : (
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
          readOnlyMode={readOnlyMode}
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
  keyValue: PropTypes.string,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  readOnlyMode: PropTypes.bool.isRequired,
  required: PropTypes.bool,
  loading: PropTypes.bool
};

Select.defaultProps = {
  options: [],
  loadingText: 'Cargando...',
  required: false,
  loading: false,
  onClean: () => {},
  placeholder: '[Seleccione]',
  keyValue: 'value'
};

export default Select;
