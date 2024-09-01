import '../output.css';

import PropTypes from 'prop-types';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import formikField from '@/utils/propTypes/formikField';
import formikForm from '@/utils/propTypes/formikForm';
import labelPropTypes from '@/utils/propTypes/label';
import optionPropTypes from '@/utils/propTypes/option';
import {Fragment} from 'react';

const handleChecked = (e, options, selectedOption, {name, value}, setFieldValue) => {
  const {value: selectedValue, exclusive} = selectedOption;
  const isChecked = e.target.checked;
  let values;
  const exclusiveOptions = options.filter(option => option.exclusive);
  if (isChecked) {
    if (exclusive) {
      values = [selectedValue];
    } else {
      const nonExclusiveOptions =
        exclusiveOptions.length > 0
          ? value.filter(
              currentValue => !exclusiveOptions.map(exclusiveOption => exclusiveOption.value).includes(currentValue)
            )
          : value;
      values = [...nonExclusiveOptions, selectedValue];
    }
  } else {
    values = value.filter(currentValue => currentValue !== selectedValue);
  }
  setFieldValue(name, values);
};

function Checkbox({options, label, field, form, disabled, warnings}) {
  return (
    <div>
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <Fragment key={option.value}>
            <input
              id={`checkbox-${index}`}
              type="checkbox"
              checked={field.value.includes(option.value)}
              className="hidden"
              onChange={e => {
                handleChecked(e, options, option, field, form.setFieldValue);
                form.setFieldTouched(field.name, false);
              }}
              disabled={disabled}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className={`ms-2 text-base ${disabled ? 'opacity-40' : 'opacity-100'} cursor-pointer`}
            >
              <div className={`p-2 rounded-md ${field.value.includes(option.value) ? 'bg-blue-300' : 'bg-gray-100'}`}>
                {option.label}
              </div>
            </label>
          </Fragment>
        ))}
      </div>
      <FieldMessage warnings={warnings} form={form} field={field} disabled={disabled} />
    </div>
  );
}

Checkbox.propTypes = {
  label: labelPropTypes.isRequired,
  options: PropTypes.arrayOf(optionPropTypes).isRequired,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  disabled: PropTypes.bool,
  warnings: PropTypes.shape({}).isRequired
};

Checkbox.defaultProps = {
  disabled: false
};

export default Checkbox;
