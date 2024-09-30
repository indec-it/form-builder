import PropTypes from 'prop-types';
import {es} from 'date-fns/locale/es';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFnsV3';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';

import dateTypes from '@/constants/dateTypes';
import formikField from '@/utils/propTypes/formikField';
import formikForm from '@/utils/propTypes/formikForm';

import FieldMessage from '../FieldMessage';
import InputLabel from '../InputLabel';
import TextField from '../TextField';
import DateTimePickerSelector from './DateTimePickerSelector';

function DatePicker({metadata: {dateType}, field, label, form, warnings, disabled, placeholder, ...props}) {
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
                warnings={warnings}
                disabled={disabled}
              />
            )}
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
              renderInput={params => (
                <TextField
                  {...params}
                  {...props}
                  form={form}
                  field={{...field, name: `${field.name}.end`, value: params.inputProps.value}}
                  warnings={warnings}
                  disabled={disabled}
                />
              )}
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

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  disabled: PropTypes.bool,
  metadata: PropTypes.shape({
    dateType: PropTypes.oneOf(Object.values(dateTypes)).isRequired
  }).isRequired,
  warnings: PropTypes.shape({})
};

DatePicker.defaultProps = {
  warnings: {},
  disabled: false,
  placeholder: '[Seleccione fecha]'
};

export default DatePicker;
