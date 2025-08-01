import {useMemo, useState} from 'react';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import {ChevronDownIcon, XIcon} from '@/components/Icons';

function Select({
  options = [],
  field,
  label,
  form,
  loading = false,
  onClean,
  placeholder = '[Seleccione]',
  disabled = false,
  keyValue = 'value',
  warnings = {}
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = selectedValue => {
    form.setFieldValue(field.name, selectedValue ? selectedValue[keyValue] : undefined);
    form.setFieldTouched(field.name, false);
    if (onClean) {
      onClean(form);
    }
    setIsOpen(false);
  };

  const handleClear = () => {
    form.setFieldValue(field.name, undefined);
    form.setFieldTouched(field.name, false);
    if (onClean) {
      onClean(form);
    }
  };

  const selectedValue = useMemo(
    () => options.find(option => option[keyValue] === field.value) || null,
    [field?.value, options, keyValue]
  );

  return (
    <div className="fb:flex fb:flex-col fb:w-full">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <div className="fb:relative fb:mt-2">
        <button
          type="button"
          className={`fb:w-full fb:px-3 fb:py-2 fb:text-left fb:bg-white fb:border-2 fb:border-gray-400 fb:rounded-lg focus:fb:outline-none focus:fb:ring-blue-500 focus:fb:border-blue-500 fb:transition-colors fb:duration-200 ${
            disabled ? 'fb:opacity-50 fb:cursor-not-allowed fb:bg-gray-50' : 'fb:cursor-pointer hover:fb:border-gray-500'
          }`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onBlur={() => {
            form.handleBlur({target: {name: field.name}});
            setTimeout(() => setIsOpen(false), 200);
          }}
          disabled={disabled}
        >
          <span className={selectedValue ? 'fb:text-gray-900' : 'fb:text-gray-500'}>
            {selectedValue ? selectedValue.label : placeholder}
          </span>
          <div className="fb:absolute fb:inset-y-0 fb:right-0 fb:flex fb:items-center fb:pr-2 fb:space-x-1">
            {selectedValue && !disabled && (
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  handleClear();
                }}
                className="fb:p-1 fb:text-gray-400 hover:fb:text-gray-600 fb:rounded fb:transition-colors fb:duration-200"
                aria-label="Clear selection"
              >
                <XIcon className="fb:w-4 fb:h-4" />
              </button>
            )}
            <ChevronDownIcon
              className={`fb:w-5 fb:h-5 fb:text-gray-400 fb:transition-transform fb:duration-200 ${isOpen ? 'fb:rotate-180' : ''}`}
            />
          </div>
        </button>

        {isOpen && !disabled && (
          <div className="fb:absolute fb:z-10 fb:w-full fb:mt-1 fb:bg-white fb:border fb:border-gray-300 fb:rounded-md fb:shadow-lg fb:max-h-60 fb:overflow-auto">
            {loading && <div className="fb:px-3 fb:py-2 fb:text-gray-500">Cargando...</div>}
            {!loading && options.length === 0 && <div className="fb:px-3 fb:py-2 fb:text-gray-500">No hay opciones.</div>}
            {options.length > 0 &&
              options.map(option => (
                <button
                  key={option[keyValue]}
                  type="button"
                  className={`fb:w-full fb:px-3 fb:py-2 fb:text-left hover:fb:bg-blue-50 focus:fb:outline-none focus:fb:bg-blue-50 fb:transition-colors fb:duration-200 ${
                    selectedValue && selectedValue[keyValue] === option[keyValue]
                      ? 'fb:bg-blue-100 fb:text-blue-900'
                      : 'fb:text-gray-900'
                  }`}
                  onClick={() => handleChange(option)}
                >
                  {option.label}
                </button>
              ))}
          </div>
        )}
      </div>
      <FieldMessage warnings={warnings} form={form} field={field} />
    </div>
  );
}

export default Select;
