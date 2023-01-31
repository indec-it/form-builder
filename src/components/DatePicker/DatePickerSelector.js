import PropTypes from 'prop-types';
import {DatePicker as MuiDatePicker} from '@mui/x-date-pickers/DatePicker';
import {DateTimePicker as MuiDateTimePicker} from '@mui/x-date-pickers/DateTimePicker';

import dateTypes from '@/constants/dateTypes';

function DateTimePickerSelector({type, ...props}) {
  if ([dateTypes.DATE_WITH_HOUR, dateTypes.RANGE_WITH_HOUR].includes(type)) {
    return (
      <MuiDateTimePicker {...props} ampm={false} inputFormat="dd/MM/yyyy HH:mm" />
    );
  }
  return (
    <MuiDatePicker {...props} inputFormat="dd/MM/yyyy" />
  );
}

DateTimePickerSelector.propTypes = {
  type: PropTypes.oneOf(Object.values(dateTypes)).isRequired
};

export default DateTimePickerSelector;
