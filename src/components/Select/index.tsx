import {useMemo} from 'react';
import {FieldInputProps, FormikProps} from 'formik';
import Autocomplete from '@mui/material/Autocomplete';

import {Label} from '@/lib/definitions';

import TextField from '../TextField';

interface Props {
  options: {
    label: string;
  }[];
  label: Label;
  onClean: (form: FormikProps<string>) => void;
  placeholder: string;
  keyValue: string;
  field: FieldInputProps<string>;
  form: FormikProps<string>;
  disabled: boolean;
  loading: boolean;
  warnings: any;
}

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
  warnings,
  ...props
}: Props) {
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
      getOptionLabel={(option: {label: string}) => option.label || ''}
      value={selectedValue}
      disabled={disabled}
      onBlur={form.handleBlur}
    />
  );
}

export default Select;
