import '../output.css';

import PropTypes from 'prop-types';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import {formikField, formikForm, label as labelPropTypes} from '@/utils/propTypes';
import optionPropTypes from '@/utils/propTypes/option';

function RadioTable({options, label, form, field, disabled, warnings}) {
  const handleChange = (e, option, subOption) => {
    let value;
    if (subOption.exclusive) {
      value = options.reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue.name]: option.id === currentValue.id ? e.target.value : undefined
        }),
        {}
      );
    } else {
      const exclusiveOptions = options.reduce((acc, currentValue) => {
        if (currentValue.subOptions.some(currentSubOption => currentSubOption.exclusive)) {
          acc[currentValue.name] = currentValue.subOptions.filter(currentSubOption => currentSubOption.exclusive);
        }
        return acc;
      }, {});
      value = {...field.value, [option.name]: e.target.value};
      Object.keys(value).forEach(key => {
        if (exclusiveOptions[key] && exclusiveOptions[key].some(currentSubOption => currentSubOption.value === value[key])) {
          value[key] = undefined;
        }
      });
    }
    form.setFieldValue(field.name, value);
    form.setFieldTouched(field.name, false);
  };

  return (
    <>
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      {options.map((option, optionIndex) => (
        <div key={option.id}>
          <div className="flex flex-col sm:flex-row">
            <p className={`${disabled ? 'opacity-5' : 'opacity-100'} whitespace-normal max-w-[400px] min-w-[400px]`}>
              {option.title}
            </p>
            <div className="flex flex-wrap gap-3 py-2">
              {option.subOptions.map((subOption, index) => (
                <div key={subOption.value}>
                  <input
                    id={`radio-${optionIndex}-${index}`}
                    type="radio"
                    value={subOption.value}
                    name={`${field.name}-${option.name}`}
                    checked={subOption.value === field.value[option.name]}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    onChange={e => handleChange(e, option, subOption)}
                    disabled={disabled}
                  />
                  <label
                    htmlFor={`radio-${optionIndex}-${index}`}
                    className={`ms-2 text-base ${disabled ? 'opacity-40' : 'opacity-100'}`}
                  >
                    {subOption.label}
                  </label>
                </div>
              ))}
              {field.value[option.name] && !disabled && (
                <button
                  type="button"
                  onClick={() => form.setFieldValue(field.name, '')}
                  className="text-white bg-red-700 font-medium rounded-lg text-sm px-3 py-1 ml-2"
                >
                  X
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <FieldMessage warnings={warnings} form={form} field={field} disabled={disabled} />
    </>
  );
}

RadioTable.propTypes = {
  field: formikField.isRequired,
  form: formikForm.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subOptions: PropTypes.arrayOf(optionPropTypes)
    })
  ).isRequired,
  label: labelPropTypes.isRequired,
  disabled: PropTypes.bool,
  warnings: PropTypes.shape({})
};

RadioTable.defaultProps = {
  warnings: {},
  disabled: false
};

export default RadioTable;
