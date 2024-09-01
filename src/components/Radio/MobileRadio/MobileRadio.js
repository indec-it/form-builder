import PropTypes from 'prop-types';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';

import {formikField, formikForm, label as labelPropTypes} from '@/utils/propTypes';

function MobileRadio({options, field, disabled, label, form, warnings}) {
  return (
    <div data-testid="radio">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <div className="flex flex-col gap-4">
        {options.map((option, index) => (
          <button
            type="button"
            className={`text-sm uppercase text-blue-600 border border-blue-300 rounded-md py-1.5 hover:bg-blue-50 ${option.value === field.value ? 'text-white bg-blue-700 hover:bg-blue-700' : ''}`}
            data-testid={`radio-${index}`}
            key={option.value}
            disabled={disabled}
            onClick={() => {
              form.setFieldValue(field.name, option.value === field.value ? '' : option.value);
              form.setFieldTouched(field.name, false);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
      <FieldMessage form={form} field={field} warnings={warnings} disabled={disabled} />
    </div>
  );
}

MobileRadio.propTypes = {
  disabled: PropTypes.bool,
  label: labelPropTypes.isRequired,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  warnings: PropTypes.shape({})
};

MobileRadio.defaultProps = {
  warnings: {},
  disabled: false
};

export default MobileRadio;
