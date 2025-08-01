import hasFormikErrorsAndWarnings from '@/utils/hasFormikErrorsAndWarnings';
import {ErrorIcon, ExclamationIcon} from '@/components/Icons';

function InputLabel({label, form, field, disabled, warnings = {}}) {
  const {hasWarning, hasError} = hasFormikErrorsAndWarnings({form, field, warnings});
  const labelNumber = label.number ? `${label.number} - ` : '';

  return (
    <>
      <div className="fb:flex fb:flex-row fb:gap-4" data-testid="input-label">
        <div className={`fb:flex fb:flex-row fb:mb-2 fb:items-center ${!disabled ? 'fb:opacity-100' : 'fb:opacity-30'}`}>
          <span className="fb:font-bold fb:text-[17px]">
            {`${labelNumber}${label.text}`} {hasError && '*'}
          </span>
        </div>
        {hasError && !disabled && (
          <div>
            <ErrorIcon className="fb:w-6 fb:h-6 fb:text-red-600" data-testid="error-icon" />
          </div>
        )}
        {hasWarning && !disabled && !hasError && (
          <div>
            <ExclamationIcon className="fb:w-6 fb:h-6 fb:text-yellow-600" data-testid="warning-icon" />
          </div>
        )}
      </div>
      {label.introduction && <p className="fb:text-gray-500 fb:font-bold">{label.introduction}</p>}
    </>
  );
}

export default InputLabel;
