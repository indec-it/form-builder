import {NumericFormat} from 'react-number-format';

import TextField from '../TextField';

function Currency({form, field, label, ...props}) {
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
