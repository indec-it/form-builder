import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import {DeleteIcon} from '@/components/Icons';

function RadioTable({options, label, form, field, disabled = false, warnings = {}}) {
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
    <div className="fb:flex fb:flex-col fb:space-y-4">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      {options.map(option => (
        <div key={option.id} className="fb:space-y-2">
          <div className="fb:flex fb:flex-col sm:fb:flex-row sm:fb:space-x-4 fb:space-y-2 sm:fb:space-y-0">
            <div className="fb:min-w-0 sm:fb:min-w-96 sm:fb:max-w-96 fb:overflow-hidden">
              <p
                className={`fb:text-sm fb:font-medium fb:whitespace-normal ${
                  disabled ? 'fb:opacity-50 fb:text-gray-400' : 'fb:text-gray-900'
                }`}
              >
                {option.title}
              </p>
            </div>
            <div className="fb:flex fb:flex-row fb:flex-wrap fb:items-center fb:gap-4">
              {option.subOptions.map(subOption => (
                <label
                  key={subOption.value}
                  htmlFor={`${field.name}-${option.name}-${subOption.value}`}
                  data-testid={`subOption-${option.id}-${subOption.id}`}
                  className={`fb:group fb:flex fb:items-center fb:space-x-4 fb:p-2 fb:rounded-lg fb:transition-all fb:duration-200 ${
                    disabled ? 'fb:opacity-50 fb:cursor-not-allowed' : 'fb:cursor-pointer'
                  }`}
                >
                  <div className="fb:relative fb:flex-shrink-0">
                    <input
                      id={`${field.name}-${option.name}-${subOption.value}`}
                      type="radio"
                      name={`${field.name}.${option.name}`}
                      value={subOption.value}
                      checked={subOption.value === field.value[option.name]}
                      onChange={e => handleChange(e, option, subOption)}
                      disabled={disabled}
                      className="fb:sr-only"
                    />
                    <div
                      className={`fb:w-6 fb:h-6 fb:border-2 fb:rounded-full fb:flex fb:items-center fb:justify-center fb:transition-all fb:duration-200 fb:transform ${
                        subOption.value === field.value[option.name]
                          ? 'fb:bg-blue-600 fb:border-blue-600 fb:scale-100 fb:shadow-md'
                          : 'fb:bg-white fb:border-gray-300 fb:scale-100'
                      } ${disabled ? 'fb:opacity-50' : ''} fb:focus-within:ring-2 fb:focus-within:ring-blue-500 fb:focus-within:ring-offset-2`}
                    >
                      {subOption.value === field.value[option.name] && (
                        <div className="fb:w-2 fb:h-2 fb:bg-white fb:rounded-full fb:transform fb:transition-transform fb:duration-150 fb:scale-110" />
                      )}
                    </div>
                  </div>
                  <span
                    className={`fb:select-none fb:font-medium fb:transition-colors fb:duration-200 ${
                      disabled ? 'fb:text-gray-400' : 'fb:text-gray-900'
                    }`}
                  >
                    {subOption.label}
                  </span>
                </label>
              ))}
              {field.value[option.name] && !disabled && (
                <button
                  type="button"
                  onClick={() => form.setFieldValue(`${field.name}.${option.name}`, undefined)}
                  className="fb:p-1 fb:text-red-600 hover:fb:text-red-800 hover:fb:bg-red-50 fb:rounded fb:transition-colors fb:duration-200"
                  data-testid={`clean-option-${option.id}`}
                  aria-label="Clear selection"
                >
                  <DeleteIcon />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <FieldMessage warnings={warnings} form={form} field={field} />
    </div>
  );
}

export default RadioTable;
