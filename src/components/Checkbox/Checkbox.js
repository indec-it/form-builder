import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import {CheckIcon} from '@/components/Icons';

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

function Checkbox({options, label, field, form, disabled = false, warnings}) {
  return (
    <div className="flex flex-col w-full">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <div className="space-y-3 mt-2">
        {options.map((option, index) => (
          <label
            key={option.value}
            data-testid={`checkbox-${index}`}
            className={`group flex items-center space-x-4 p-2 rounded-lg transition-all duration-200 ${
              disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer '
            }`}
            htmlFor={`checkbox-${field.name}-${index}`}
          >
            <div className="relative flex-shrink-0">
              <input
                id={`checkbox-${field.name}-${index}`}
                type="checkbox"
                data-testid={`option-${index}`}
                checked={field.value.includes(option.value)}
                onChange={e => {
                  handleChecked(e, options, option, field, form.setFieldValue);
                  form.setFieldTouched(field.name, false);
                }}
                disabled={disabled}
                className="sr-only"
              />
              <div
                className={`w-6 h-6 border-2 rounded-md flex items-center justify-center transition-all duration-200 transform ${
                  field.value.includes(option.value)
                    ? 'bg-blue-600 border-blue-600 scale-100 shadow-md'
                    : 'bg-white border-gray-300 scale-100'
                } ${disabled ? 'opacity-50' : ''} focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2`}
              >
                {field.value.includes(option.value) && (
                  <CheckIcon className="w-4 h-4 text-white transform transition-transform duration-150 scale-110" />
                )}
              </div>
            </div>
            <span
              className={`select-none font-medium transition-colors duration-200 ${
                disabled ? 'text-gray-400' : 'text-gray-900'
              }`}
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
      <FieldMessage warnings={warnings} form={form} field={field} />
    </div>
  );
}

export default Checkbox;
