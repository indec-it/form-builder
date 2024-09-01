import PropTypes from 'prop-types';

import {formikField, formikForm} from '@/utils/propTypes';
import hasFormikErrorsAndWarnings from '@/utils/hasFormikErrorsAndWarnings';

function FieldMessage({form, field, disabled, warnings}) {
  const {hasWarning, warning, hasError, error} = hasFormikErrorsAndWarnings({form, field, warnings});
  if (hasError && !disabled) {
    return (
      <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
        <svg
          className="flex-shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">{error}</span>
        </div>
      </div>
    );
  }
  if (hasWarning && !disabled) {
    return (
      <div className="flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-100" role="alert">
        <svg
          className="flex-shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">{warning}</span>
        </div>
      </div>
    );
  }
  return null;
}

FieldMessage.propTypes = {
  field: formikField.isRequired,
  form: formikForm.isRequired,
  disabled: PropTypes.bool.isRequired,
  warnings: PropTypes.shape({}).isRequired
};

export default FieldMessage;
