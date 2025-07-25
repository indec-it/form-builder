import {useState} from 'react';

import InputLabel from '@/components/InputLabel';
import FieldMessage from '@/components/FieldMessage';
import {QuestionIcon} from '@/components/Icons';

function TextField({
  form,
  field,
  placeholder = '[Ingrese texto]',
  label,
  disabled = false,
  tooltip,
  warnings = {},
  multiline = false,
  className: propClassName,
  ...props
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleBlur = e => {
    const event = e;
    if (field.onChange && event.target.value) {
      event.target.value = event.target.value.trim();
      field.onChange(e);
    }
  };

  const baseClassName =
    'w-full px-4 py-2 border-2 border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200';
  const textareaClassName = `${baseClassName} resize-vertical`;
  const finalClassName = propClassName ? `${baseClassName} ${propClassName}` : baseClassName;
  const finalTextareaClassName = propClassName ? `${textareaClassName} ${propClassName}` : textareaClassName;

  return (
    <div className="w-full">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <div className="relative">
        {multiline ? (
          <textarea
            id={`field-${field.name}`}
            placeholder={placeholder}
            className={finalTextareaClassName}
            {...field}
            onChange={e => {
              field.onChange(e);
              form.setFieldTouched(field.name, false);
            }}
            onBlur={handleBlur}
            disabled={disabled}
            rows={2}
            onWheel={e => e.target.blur()}
            {...props}
          />
        ) : (
          <input
            type="text"
            id={`field-${field.name}`}
            placeholder={placeholder}
            className={finalClassName}
            {...field}
            onChange={e => {
              field.onChange(e);
              form.setFieldTouched(field.name, false);
            }}
            onBlur={handleBlur}
            disabled={disabled}
            onWheel={e => e.target.blur()}
            {...props}
          />
        )}
        {tooltip && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div className="relative">
              <button
                type="button"
                className="p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onFocus={() => setShowTooltip(true)}
                onBlur={() => setShowTooltip(false)}
                aria-label="Show help tooltip"
              >
                <QuestionIcon />
              </button>
              {showTooltip && (
                <div className="absolute bottom-full right-0 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg whitespace-nowrap z-10">
                  {tooltip}
                  <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <FieldMessage warnings={warnings} form={form} field={field} />
    </div>
  );
}

export default TextField;
