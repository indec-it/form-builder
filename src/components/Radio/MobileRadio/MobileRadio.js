import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';

function MobileRadio({options, field, disabled = false, label, form, warnings = {}}) {
  return (
    <div className="flex flex-col w-full" data-testid="radio">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <div className="flex flex-col space-y-2 mt-2">
        {options.map((option, index) => (
          <button
            data-testid={`radio-${index}`}
            key={option.value}
            type="button"
            disabled={disabled}
            className={`px-4 py-2 text-sm font-medium rounded-md border transition-colors duration-200 ${
              option.value === field.value
                ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            } ${
              disabled
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            }`}
            onClick={() => {
              form.setFieldValue(field.name, option.value === field.value ? '' : option.value);
              form.setFieldTouched(field.name, false);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
      <FieldMessage form={form} field={field} warnings={warnings} />
    </div>
  );
}

export default MobileRadio;
