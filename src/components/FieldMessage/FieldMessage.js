import hasFormikErrorsAndWarnings from '@/utils/hasFormikErrorsAndWarnings';
import {XCircleIcon, ExclamationIcon} from '@/components/Icons';

function FieldMessage({form, field, warnings}) {
  const {hasWarning, warning, hasError, error} = hasFormikErrorsAndWarnings({form, field, warnings});
  if (hasError) {
    return (
      <div
        className="flex justify-center items-center mt-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-md"
        role="alert"
      >
        <XCircleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
        <span>{error}</span>
      </div>
    );
  }
  if (hasWarning) {
    return (
      <div
        className="flex justify-center items-center mt-4 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md"
        role="alert"
      >
        <ExclamationIcon className="w-5 h-5 mr-2 flex-shrink-0" />
        <span>{warning}</span>
      </div>
    );
  }
  return null;
}

export default FieldMessage;
