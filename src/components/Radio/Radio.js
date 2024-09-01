import {Fragment} from 'react';
import PropTypes from 'prop-types';

import {DeleteButton} from '@/components/Buttons';
import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import breakpoints from '@/constants/breakpoints';
import {useBreakpoint} from '@/hooks';
import {formikField, formikForm, label as labelPropTypes} from '@/utils/propTypes';

import MobileRadio from './MobileRadio';

function Radio({options, field, disabled, label, form, warnings}) {
  const {breakpoint} = useBreakpoint();
  return breakpoint === breakpoints.EXTRA_SMALL ? (
    <MobileRadio options={options} field={field} disabled={disabled} label={label} form={form} warnings={warnings} />
  ) : (
    <div data-testid="radio">
      <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <Fragment key={option.value}>
            <input
              id={`radio-${index}`}
              type="radio"
              value={option.value}
              name={field.name}
              checked={option.value === field.value}
              className="text-blue-600 bg-gray-100 border-gray-300 hidden peer"
              onChange={e => {
                field.onChange(e);
                form.setFieldTouched(field.name, false);
              }}
              disabled={disabled}
            />
            <label
              htmlFor={`radio-${index}`}
              className={`text-base ${disabled ? 'opacity-40' : 'opacity-100'} cursor-pointer`}
            >
              <div className={`rounded-md p-2 flex ${option.value === field.value ? 'bg-blue-300' : 'bg-gray-100'}`}>
                {option.label}
                {option.value === field.value && !disabled && (
                  <DeleteButton onClick={() => form.setFieldValue(field.name, '')} className="text-red-900 pl-2" />
                )}
              </div>
            </label>
          </Fragment>
        ))}
      </div>
      <FieldMessage form={form} field={field} warnings={warnings} disabled={disabled} />
    </div>
  );
}

Radio.propTypes = {
  disabled: PropTypes.bool,
  label: labelPropTypes.isRequired,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  warnings: PropTypes.shape({})
};

Radio.defaultProps = {
  warnings: {},
  disabled: false
};

export default Radio;
