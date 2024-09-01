import '../output.css';

import PropTypes from 'prop-types';

import InputLabel from '@/components/InputLabel';
import FieldMessage from '@/components/FieldMessage';
import {formikField, formikForm, label as labelPropTypes} from '@/utils/propTypes';

function Text({multiline, ...props}) {
  return multiline ? <textarea {...props} /> : <input {...props} />;
}

function TextField({form, field, placeholder, label, disabled, tooltip, warnings, multiline, ...props}) {
  const handleBlur = e => {
    const event = e;
    if (field.onChange && event.target.value) {
      event.target.value = event.target.value.trim();
      field.onChange(e);
    }
  };

  console.log({field, props});

  return (
    <div>
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <Text
        type="text"
        className="border border-gray-300 rounded-md disabled:hover:border-gray-300 hover:border-gray-500 focus:border-2 focus:border-blue-700 focus:outline-none w-full py-4 px-2"
        id={`field-${field.name}`}
        placeholder={placeholder}
        {...field}
        onChange={e => {
          field.onChange(e);
          form.setFieldTouched(field.name, true);
        }}
        onBlur={handleBlur}
        disabled={disabled}
        multiline={multiline}
      />
      <FieldMessage warnings={warnings} form={form} field={field} disabled={disabled} />
    </div>
  );
}

TextField.propTypes = {
  field: formikField.isRequired,
  form: formikForm.isRequired,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  label: labelPropTypes.isRequired,
  placeholder: PropTypes.string,
  tooltip: PropTypes.string,
  warnings: PropTypes.shape({})
};

TextField.defaultProps = {
  placeholder: '[Ingrese texto]',
  tooltip: undefined,
  warnings: {},
  disabled: false,
  multiline: false
};

export default TextField;
