import hasFormikErrorsAndWarnings from '@/utils/hasFormikErrorsAndWarnings';
import {ErrorIcon, ExclamationIcon} from '@/components/Icons';

function InputLabel({label, form, field, disabled, warnings = {}}) {
  const {hasWarning, hasError} = hasFormikErrorsAndWarnings({form, field, warnings});
  const labelNumber = label.number ? `${label.number} - ` : '';

  return (
    <>
      <div className="flex flex-row gap-4" data-testid="input-label">
        <div className={`flex flex-row mb-2 items-center ${!disabled ? 'opacity-100' : 'opacity-30'}`}>
          <span className="font-bold text-[17px]">
            {`${labelNumber}${label.text}`} {hasError && '*'}
          </span>
        </div>
        {hasError && !disabled && (
          <div>
            <ErrorIcon className="w-6 h-6 text-red-600" data-testid="error-icon" />
          </div>
        )}
        {hasWarning && !disabled && !hasError && (
          <div>
            <ExclamationIcon className="w-6 h-6 text-yellow-600" data-testid="warning-icon" />
          </div>
        )}
      </div>
      {label.introduction && <p className="text-gray-500 font-bold">{label.introduction}</p>}
    </>
  );
}

export default InputLabel;
