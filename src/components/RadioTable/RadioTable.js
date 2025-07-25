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
    <div className="flex flex-col space-y-4">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      {options.map(option => (
        <div key={option.id} className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <div className="min-w-0 sm:min-w-96 sm:max-w-96 overflow-hidden">
              <p
                className={`text-sm font-medium whitespace-normal ${
                  disabled ? 'opacity-50 text-gray-400' : 'text-gray-900'
                }`}
              >
                {option.title}
              </p>
            </div>
            <div className="flex flex-row flex-wrap items-center gap-4">
              {option.subOptions.map(subOption => (
                <label
                  key={subOption.value}
                  htmlFor={`${field.name}-${option.name}-${subOption.value}`}
                  data-testid={`subOption-${option.id}-${subOption.id}`}
                  className={`group flex items-center space-x-4 p-2 rounded-lg transition-all duration-200 ${
                    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  <div className="relative flex-shrink-0">
                    <input
                      id={`${field.name}-${option.name}-${subOption.value}`}
                      type="radio"
                      name={`${field.name}.${option.name}`}
                      value={subOption.value}
                      checked={subOption.value === field.value[option.name]}
                      onChange={e => handleChange(e, option, subOption)}
                      disabled={disabled}
                      className="sr-only"
                    />
                    <div
                      className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all duration-200 transform ${
                        subOption.value === field.value[option.name]
                          ? 'bg-blue-600 border-blue-600 scale-100 shadow-md'
                          : 'bg-white border-gray-300 scale-100'
                      } ${disabled ? 'opacity-50' : ''} focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2`}
                    >
                      {subOption.value === field.value[option.name] && (
                        <div className="w-2 h-2 bg-white rounded-full transform transition-transform duration-150 scale-110" />
                      )}
                    </div>
                  </div>
                  <span
                    className={`select-none font-medium transition-colors duration-200 ${
                      disabled ? 'text-gray-400' : 'text-gray-900'
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
                  className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors duration-200"
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
