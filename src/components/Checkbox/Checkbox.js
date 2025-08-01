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
    <div className="fb:flex fb:flex-col fb:w-full">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <div className="fb:space-y-3 fb:mt-2">
        {options.map((option, index) => (
          <label
            key={option.value}
            data-testid={`checkbox-${index}`}
            className={`fb:group fb:flex fb:items-center fb:space-x-4 fb:p-2 fb:rounded-lg fb:transition-all fb:duration-200 ${
              disabled ? 'fb:opacity-50 fb:cursor-not-allowed' : 'fb:cursor-pointer '
            }`}
            htmlFor={`checkbox-${field.name}-${index}`}
          >
            <div className="fb:relative fb:flex-shrink-0">
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
                className="fb:sr-only"
              />
              <div
                className={`fb:w-6 fb:h-6 fb:border-2 fb:rounded-md fb:flex fb:items-center fb:justify-center fb:transition-all fb:duration-200 fb:transform ${
                  field.value.includes(option.value)
                    ? 'fb:bg-blue-600 fb:border-blue-600 fb:scale-100 fb:shadow-md'
                    : 'fb:bg-white fb:border-gray-300 fb:scale-100'
                } ${disabled ? 'fb:opacity-50' : ''} fb:focus-within:ring-2 fb:focus-within:ring-blue-500 fb:focus-within:ring-offset-2`}
              >
                {field.value.includes(option.value) && (
                  <CheckIcon className="fb:w-4 fb:h-4 fb:text-white fb:transform fb:transition-transform fb:duration-150 fb:scale-110" />
                )}
              </div>
            </div>
            <span
              className={`fb:select-none fb:font-medium fb:transition-colors fb:duration-200 ${
                disabled ? 'fb:text-gray-400' : 'fb:text-gray-900'
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
