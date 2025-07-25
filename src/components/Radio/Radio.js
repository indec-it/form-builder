import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import breakpoints from '@/constants/breakpoints';
import {useBreakpoint} from '@/hooks';
import {DeleteIcon} from '@/components/Icons';

import MobileRadio from './MobileRadio';

function Radio({options, field, disabled = false, label, form, warnings = {}}) {
  const {breakpoint} = useBreakpoint();
  return breakpoint === breakpoints.EXTRA_SMALL ? (
    <MobileRadio options={options} field={field} disabled={disabled} label={label} form={form} warnings={warnings} />
  ) : (
    <div className="flex flex-col w-full" data-testid="radio">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <div className="space-y-3 mt-2" role="radiogroup" onBlur={form.handleBlur}>
        {options.map((option, index) => (
          <div key={option.value} className="flex items-center space-x-2">
            <label
              htmlFor={`${field.name}-${option.value}`}
              className={`group flex items-center space-x-4 p-2 rounded-lg transition-all duration-200 ${
                disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
              data-testid={`radio-${index}`}
            >
              <div className="relative flex-shrink-0">
                <input
                  id={`${field.name}-${option.value}`}
                  type="radio"
                  name={field.name}
                  value={option.value}
                  checked={option.value === field.value}
                  onChange={e => {
                    field.onChange(e);
                    form.setFieldTouched(field.name, false);
                  }}
                  disabled={disabled}
                  className="sr-only"
                />
                <div
                  className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all duration-200 transform ${
                    option.value === field.value
                      ? 'bg-blue-600 border-blue-600 scale-100 shadow-md'
                      : 'bg-white border-gray-300 scale-100'
                  } ${disabled ? 'opacity-50' : ''} focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2`}
                >
                  {option.value === field.value && (
                    <div className="w-2 h-2 bg-white rounded-full transform transition-transform duration-150 scale-110" />
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
            {option.value === field.value && !disabled && (
              <button
                type="button"
                onClick={() => form.setFieldValue(field.name, '')}
                className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors duration-200"
                data-testid={`clean-option-${index}`}
                aria-label="Clear selection"
              >
                <DeleteIcon />
              </button>
            )}
          </div>
        ))}
      </div>
      <FieldMessage form={form} field={field} warnings={warnings} />
    </div>
  );
}

export default Radio;
