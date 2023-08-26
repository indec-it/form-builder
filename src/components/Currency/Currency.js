import {NumericFormat} from 'react-number-format';

import {formikField, formikForm, label as labelPropTypes} from '@/utils/propTypes';

import TextField from '../TextField';

function Currency({form, field, label, ...props}) {
  const handleChange = values => {
    const {formattedValue} = values;
    form.setFieldValue(field.name, formattedValue);
    form.setFieldTouched(field.name, true);
  };

  return (
    <NumericFormat
      {...props}
      value={field.value}
      onValueChange={handleChange}
      thousandSeparator="."
      decimalSeparator=","
      customInput={TextField}
      form={form}
      field={field}
      label={label}
    />
  );
}

Currency.propTypes = {
  form: formikForm.isRequired,
  field: formikField.isRequired,
  label: labelPropTypes.isRequired
};

export default Currency;
