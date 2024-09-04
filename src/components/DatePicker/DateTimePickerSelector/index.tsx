import {DatePicker as MuiDatePicker} from '@mui/x-date-pickers/DatePicker';
import {DateTimePicker as MuiDateTimePicker} from '@mui/x-date-pickers/DateTimePicker';

import {DATE_TYPES} from '@/lib/enums';

interface Props {
  onChange: (e) => void;
  type: DATE_TYPES;
  value: string;
  placeholder: string;
}

function DateTimePickerSelector({type, onChange, value, placeholder = '[Seleccione fecha]', ...props}: Props) {
  const handleChange = date => {
    onChange(date ? date.toISOString() : date);
  };
  if ([DATE_TYPES.DATE_WITH_HOUR, DATE_TYPES.RANGE_WITH_HOUR].includes(type)) {
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

export default DateTimePickerSelector;
