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
    <div className="flex flex-col w-full">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <div className="relative mt-2">
        <button
          type="button"
          className={`w-full px-3 py-2 text-left bg-white border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
            disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'cursor-pointer hover:border-gray-500'
          }`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onBlur={() => {
            form.handleBlur({target: {name: field.name}});
            setTimeout(() => setIsOpen(false), 200);
          }}
          disabled={disabled}
        >
          <span className={selectedValue ? 'text-gray-900' : 'text-gray-500'}>
            {selectedValue ? selectedValue.label : placeholder}
          </span>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-1">
            {selectedValue && !disabled && (
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  handleClear();
                }}
                className="p-1 text-gray-400 hover:text-gray-600 rounded transition-colors duration-200"
                aria-label="Clear selection"
              >
                <XIcon className="w-4 h-4" />
              </button>
            )}
            <ChevronDownIcon
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </button>

        {isOpen && !disabled && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
            {loading && <div className="px-3 py-2 text-gray-500">Cargando...</div>}
            {!loading && options.length === 0 && <div className="px-3 py-2 text-gray-500">No hay opciones.</div>}
            {options.length > 0 &&
              options.map(option => (
                <button
                  key={option[keyValue]}
                  type="button"
                  className={`w-full px-3 py-2 text-left hover:bg-blue-50 focus:outline-none focus:bg-blue-50 transition-colors duration-200 ${
                    selectedValue && selectedValue[keyValue] === option[keyValue]
                      ? 'bg-blue-100 text-blue-900'
                      : 'text-gray-900'
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
