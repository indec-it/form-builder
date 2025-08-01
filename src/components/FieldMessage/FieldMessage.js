import hasFormikErrorsAndWarnings from '@/utils/hasFormikErrorsAndWarnings';
import {XCircleIcon, ExclamationIcon} from '@/components/Icons';

function FieldMessage({form, field, warnings}) {
  const {hasWarning, warning, hasError, error} = hasFormikErrorsAndWarnings({form, field, warnings});
  if (hasError) {
    return (
      <div
        className="fb:flex fb:justify-center fb:items-center fb:mt-4 fb:p-4 fb:bg-red-50 fb:border fb:border-red-200 fb:text-red-800 fb:rounded-md"
        role="alert"
      >
        <XCircleIcon className="fb:w-5 fb:h-5 fb:mr-2 fb:flex-shrink-0" />
        <span>{error}</span>
      </div>
    );
  }
  if (hasWarning) {
    return (
      <div
        className="fb:flex fb:justify-center fb:items-center fb:mt-4 fb:p-4 fb:bg-yellow-50 fb:border fb:border-yellow-200 fb:text-yellow-800 fb:rounded-md"
        role="alert"
      >
        <ExclamationIcon className="fb:w-5 fb:h-5 fb:mr-2 fb:flex-shrink-0" />
        <span>{warning}</span>
      </div>
    );
  }
  return null;
}

export default FieldMessage;
