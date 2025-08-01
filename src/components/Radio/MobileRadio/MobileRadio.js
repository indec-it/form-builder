import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';

function MobileRadio({options, field, disabled = false, label, form, warnings = {}}) {
  return (
    <div className="fb:flex fb:flex-col fb:w-full" data-testid="radio">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <div className="fb:flex fb:flex-col fb:space-y-2 fb:mt-2">
        {options.map((option, index) => (
          <button
            data-testid={`radio-${index}`}
            key={option.value}
            type="button"
            disabled={disabled}
            className={`fb:px-4 fb:py-2 fb:text-sm fb:font-medium fb:rounded-md fb:border fb:transition-colors fb:duration-200 ${
              option.value === field.value
                ? 'fb:bg-blue-600 fb:text-white fb:border-blue-600 hover:fb:bg-blue-700'
                : 'fb:bg-white fb:text-gray-700 fb:border-gray-300 hover:fb:bg-gray-50'
            } ${
              disabled
                ? 'fb:opacity-50 fb:cursor-not-allowed'
                : 'fb:cursor-pointer focus:fb:outline-none focus:fb:ring-2 focus:fb:ring-blue-500 focus:fb:ring-offset-2'
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
