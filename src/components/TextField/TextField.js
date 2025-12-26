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
    'fb:w-full fb:px-4 fb:py-2 fb:border-2 fb:border-gray-400 fb:rounded-lg fb:bg-white fb:focus:outline-none fb:focus:ring-blue-500 fb:focus:border-blue-500 fb:disabled:bg-gray-50 fb:disabled:opacity-50 fb:disabled:cursor-not-allowed fb:transition-colors fb:duration-200';
  const textareaClassName = `${baseClassName} fb:resize-vertical`;
  const finalClassName = propClassName ? `${baseClassName} ${propClassName}` : baseClassName;
  const finalTextareaClassName = propClassName ? `${textareaClassName} ${propClassName}` : textareaClassName;

  return (
    <div className="fb:w-full">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <div className="fb:relative">
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
          <div className="fb:absolute fb:inset-y-0 fb:right-0 fb:flex fb:items-center fb:pr-3">
            <div className="fb:relative">
              <button
                type="button"
                className="fb:p-1 fb:text-gray-400 fb:hover:text-gray-600 fb:focus:outline-none"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onFocus={() => setShowTooltip(true)}
                onBlur={() => setShowTooltip(false)}
                aria-label="Show help tooltip"
              >
                <QuestionIcon />
              </button>
              {showTooltip && (
                <div className="fb:absolute fb:bottom-full fb:right-0 fb:mb-2 fb:px-3 fb:py-2 fb:text-sm fb:text-white fb:bg-gray-900 fb:rounded-md fb:shadow-lg fb:whitespace-nowrap fb:z-10">
                  {tooltip}
                  <div className="fb:absolute fb:top-full fb:right-3 fb:w-0 fb:h-0 fb:border-l-4 fb:border-r-4 fb:border-t-4 fb:border-transparent fb:border-t-gray-900" />
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
