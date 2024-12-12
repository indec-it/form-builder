import {es} from 'date-fns/locale/es';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFnsV3';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';

import dateTypes from '@/constants/dateTypes';

import FieldMessage from '../FieldMessage';
import InputLabel from '../InputLabel';
import DateTimePickerSelector from './DateTimePickerSelector';

function DatePicker({
  metadata: {dateType},
  field,
  label,
  form,
  warnings = {},
  disabled = false,
  placeholder = '[Seleccione fecha]'
}) {
  const isRange = [dateTypes.RANGE_WITHOUT_HOUR, dateTypes.RANGE_WITH_HOUR].includes(dateType);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      <Stack>
        <InputLabel label={label} form={form} field={field} warnings={warnings} disabled={disabled} />
        <Stack direction={{xs: 'column', sm: 'row'}} spacing={{xs: 1, sm: 2, md: 4}}>
          <DateTimePickerSelector
            type={dateType}
            label={isRange ? 'Fecha de inicio' : ''}
            value={isRange ? field.value.start : field.value}
            onChange={newValue => {
              form.setFieldValue(isRange ? `${field.name}.start` : field.name, newValue);
              form.setFieldTouched(isRange ? `${field.name}.start` : field.name, false);
            }}
            disabled={disabled}
            placeholder={placeholder}
          />
          {isRange && (
            <DateTimePickerSelector
              type={dateType}
              minutesStep={1}
              label="Fecha de fin"
              value={field.value.end}
              onChange={newValue => {
                form.setFieldValue(`${field.name}.end`, newValue);
                form.setFieldTouched(`${field.name}.end`, false);
              }}
              disabled={!field.value.start}
              placeholder={placeholder}
            />
          )}
        </Stack>
        <FieldMessage warnings={warnings} form={form} field={field} />
      </Stack>
    </LocalizationProvider>
  );
}

export default DatePicker;
