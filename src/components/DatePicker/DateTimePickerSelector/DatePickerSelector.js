import {DatePicker as MuiDatePicker} from '@mui/x-date-pickers/DatePicker';
import {DateTimePicker as MuiDateTimePicker} from '@mui/x-date-pickers/DateTimePicker';

import dateTypes from '@/constants/dateTypes';

function DateTimePickerSelector({Component, type, onChange, value, ...props}) {
  const handleChange = date => {
    onChange(date ? date.toISOString() : date);
  };
  if ([dateTypes.DATE_WITH_HOUR, dateTypes.RANGE_WITH_HOUR].includes(type)) {
    return (
      <MuiDateTimePicker
        {...props}
        timeSteps={{minutes: 1}}
        ampm={false}
        inputFormat="dd/MM/yyyy HH:mm"
        onChange={handleChange}
        value={value ? new Date(value) : undefined}
      />
    );
  }
  return (
    <MuiDatePicker {...props} inputFormat="dd/MM/yyyy" onChange={handleChange} value={value ? new Date(value) : undefined} />
  );
}

export default DateTimePickerSelector;
