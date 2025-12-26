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
    <div className="fb:flex fb:flex-col fb:w-full" data-testid="radio">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <div className="fb:space-y-3 fb:mt-2" role="radiogroup" onBlur={form.handleBlur}>
        {options.map((option, index) => (
          <div key={option.value} className="fb:flex fb:items-center fb:space-x-2">
            <label
              htmlFor={`${field.name}-${option.value}`}
              className={`fb:group fb:flex fb:items-center fb:space-x-4 fb:p-2 fb:rounded-lg fb:transition-all fb:duration-200 ${
                disabled ? 'fb:opacity-50 fb:cursor-not-allowed' : 'fb:cursor-pointer'
              }`}
              data-testid={`radio-${index}`}
            >
              <div className="fb:relative fb:flex-shrink-0">
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
                  className="fb:sr-only"
                />
                <div
                  className={`fb:w-6 fb:h-6 fb:border-2 fb:rounded-full fb:flex fb:items-center fb:justify-center fb:transition-all fb:duration-200 fb:transform ${
                    option.value === field.value
                      ? 'fb:bg-blue-600 fb:border-blue-600 fb:scale-100 fb:shadow-md'
                      : 'fb:bg-white fb:border-gray-300 fb:scale-100'
                  } ${disabled ? 'fb:opacity-50' : ''} fb:focus-within:ring-2 fb:focus-within:ring-blue-500 fb:focus-within:ring-offset-2`}
                >
                  {option.value === field.value && (
                    <div className="fb:w-2 fb:h-2 fb:bg-white fb:rounded-full fb:transform fb:transition-transform fb:duration-150 fb:scale-110" />
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
            {option.value === field.value && !disabled && (
              <button
                type="button"
                onClick={() => form.setFieldValue(field.name, '')}
                className="fb:p-1 fb:text-red-600 fb:hover:text-red-800 fb:hover:bg-red-50 fb:rounded fb:transition-colors fb:duration-200"
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
