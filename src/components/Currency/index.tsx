import {FieldInputProps, FormikProps} from 'formik';
import {NumericFormat} from 'react-number-format';

import {Label} from '@/lib/definitions';

import TextField from '../TextField';

type Value = number;

interface Props {
  form: FormikProps<Value>;
  field: FieldInputProps<Value>;
  label: Label;
}

function Currency({form, field, label, ...props}: Props) {
  const handleChange = values => {
    const {floatValue} = values;
    form.setFieldValue(field.name, typeof floatValue === 'number' ? floatValue : '');
    form.setFieldTouched(field.name, false);
  };

  return (
    <NumericFormat
      {...props}
      placeholder="Ingrese Valor"
      value={field.value}
      onValueChange={handleChange}
      thousandSeparator="."
      decimalSeparator=","
      isNumericString={false}
      customInput={TextField}
      form={form}
      field={field}
      label={label}
      onBlur={() => {}}
    />
  );
}

export default Currency;
