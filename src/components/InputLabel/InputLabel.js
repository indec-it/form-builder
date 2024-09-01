import '../output.css';

import PropTypes from 'prop-types';

import {Exclamation, Warning} from '@/components/Icons';
import hasFormikErrorsAndWarnings from '@/utils/hasFormikErrorsAndWarnings';
import formikFormPropTypes from '@/utils/propTypes/formikForm';
import formikFieldPropTypes from '@/utils/propTypes/formikField';
import labelPropTypes from '@/utils/propTypes/label';

function InputLabel({label, form, field, disabled, warnings}) {
  const {hasWarning, hasError} = hasFormikErrorsAndWarnings({form, field, warnings});
  const labelNumber = label.number ? `${label.number} - ` : '';
  return (
    <>
      <div className="flex gap-2" data-testid="input-label">
        <div className={`flex ${disabled ? 'opacity-40' : 'opacity-100'}`}>
          <p className="font-bold text-[17px] p-0">
            {`${labelNumber}${label.text}`} {hasError && '*'}
          </p>
        </div>
        {hasError && !disabled && <Exclamation data-testid="error-icon" />}
        {hasWarning && !disabled && !hasError && <Warning data-testid="warning-icon" />}
      </div>
      {label.introduction && <p className="font-bold text-gray-500">{label.introduction}</p>}
    </>
  );
}

InputLabel.propTypes = {
  label: labelPropTypes.isRequired,
  form: formikFormPropTypes.isRequired,
  field: formikFieldPropTypes.isRequired,
  disabled: PropTypes.bool.isRequired,
  warnings: PropTypes.shape({})
};

InputLabel.defaultProps = {
  warnings: {}
};

export default InputLabel;
