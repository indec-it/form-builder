import PropTypes from 'prop-types';
import {DatePicker as MuiDatePicker} from '@mui/x-date-pickers/DatePicker';
import {DateTimePicker as MuiDateTimePicker} from '@mui/x-date-pickers/DateTimePicker';

import dateTypes from '@/constants/dateTypes';

function DateTimePickerSelector({type, onChange, value, placeholder, ...props}) {
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
        slotProps={{
          textField: {
            error: false,
            placeholder
          }
        }}
      />
    );
  }
  return (
    <MuiDatePicker
      {...props}
      inputFormat="dd/MM/yyyy"
      onChange={handleChange}
      value={value ? new Date(value) : undefined}
      slotProps={{
        textField: {
          error: false,
          placeholder
        }
      }}
    />
  );
}

DateTimePickerSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(Object.values(dateTypes)).isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string
};

DateTimePickerSelector.defaultProps = {
  value: undefined,
  placeholder: '[Seleccione fecha]'
};

export default DateTimePickerSelector;
