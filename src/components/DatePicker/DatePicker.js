import PropTypes from 'prop-types';
import {es} from 'date-fns/locale';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import MuiInputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';

import dateTypes from '@/constants/dateTypes';
import formikField from '@/utils/propTypes/formikField';
import formikForm from '@/utils/propTypes/formikForm';

import TextField from '../TextField';
import DateTimePickerSelector from './DatePickerSelector';

function DatePicker({
  metadata: {dateType}, field, label, required, form, ...props
}) {
  const isRange = [dateTypes.RANGE_WITHOUT_HOUR, dateTypes.RANGE_WITH_HOUR].includes(dateType);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      <MuiInputLabel required={required}>{label}</MuiInputLabel>
      <Stack direction={{xs: 'column', sm: 'row'}} spacing={{xs: 1, sm: 2, md: 4}}>
        <DateTimePickerSelector
          type={dateType}
          label={isRange ? 'Fecha de inicio' : ''}
          value={isRange ? field.value.start : field.value}
          onChange={newValue => form.setFieldValue(isRange ? `${field.name}.start` : field.name, newValue)}
          renderInput={params => (
            <TextField
              {...params}
              {...props}
              form={form}
              field={{
                ...field,
                name: isRange ? `${field.name}.start` : field.name,
                value: params.inputProps.value
              }}
              required={required}
            />
          )}
        />
        {isRange && (
          <DateTimePickerSelector
            type={dateType}
            label="Fecha de fin"
            value={field.value.end}
            onChange={newValue => form.setFieldValue(`${field.name}.end`, newValue)}
            renderInput={params => (
              <TextField
                {...params}
                {...props}
                form={form}
                field={{...field, name: `${field.name}.end`, value: params.inputProps.value}}
                required={required}
              />
            )}
            disabled={!field.value.start}
          />
        )}
      </Stack>
    </LocalizationProvider>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  required: PropTypes.bool.isRequired,
  metadata: PropTypes.shape({
    dateType: PropTypes.oneOf(Object.values(dateTypes)).isRequired
  }).isRequired
};

export default DatePicker;
