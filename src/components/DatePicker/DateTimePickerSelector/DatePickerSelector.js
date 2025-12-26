import {useId} from 'react';
import DatePicker from 'react-datepicker';

import dateTypes from '@/constants/dateTypes';

function DateTimePickerSelector({type, onChange, value, label, disabled, placeholder, locale, ...props}) {
  const id = useId();
  const handleChange = date => {
    onChange(date ? date.toISOString() : date);
  };

  const commonProps = {
    id,
    selected: value ? new Date(value) : null,
    onChange: handleChange,
    disabled,
    placeholderText: placeholder,
    locale,
    dateFormat: [dateTypes.DATE_WITH_HOUR, dateTypes.RANGE_WITH_HOUR].includes(type) ? 'dd/MM/yyyy HH:mm' : 'dd/MM/yyyy',
    className:
      'fb:w-full fb:px-3 fb:py-2 fb:border fb:border-gray-300 fb:rounded-md fb:focus:outline-none fb:focus:ring-2 fb:focus:ring-blue-500 fb:focus:border-transparent fb:disabled:bg-gray-100 fb:disabled:cursor-not-allowed',
    wrapperClassName: 'fb:w-full',
    ...props
  };

  if ([dateTypes.DATE_WITH_HOUR, dateTypes.RANGE_WITH_HOUR].includes(type)) {
    return (
      <div className="fb:flex fb:flex-col">
        {label && (
          <label htmlFor={id} className="fb:text-sm fb:font-medium fb:text-gray-700 fb:mb-1">
            {label}
          </label>
        )}
        <DatePicker {...commonProps} showTimeSelect timeFormat="HH:mm" timeIntervals={1} timeCaption="Hora" />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <DatePicker {...commonProps} />
    </div>
  );
}

export default DateTimePickerSelector;
