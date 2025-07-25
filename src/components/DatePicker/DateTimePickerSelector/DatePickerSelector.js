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
      'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed',
    wrapperClassName: 'w-full',
    ...props
  };

  if ([dateTypes.DATE_WITH_HOUR, dateTypes.RANGE_WITH_HOUR].includes(type)) {
    return (
      <div className="flex flex-col">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-1">
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
