import {FieldInputProps, FormikProps} from 'formik';
import {es} from 'date-fns/locale/es';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFnsV3';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';

import {DATE_TYPES} from '@/lib/enums';
import {Label} from '@/lib/definitions';

import FieldMessage from '../FieldMessage';
import InputLabel from '../InputLabel';
import TextField from '../TextField';
import DateTimePickerSelector from './DateTimePickerSelector';

type Value = {start: string; end: string};

interface Props {
  field: FieldInputProps<Value>;
  label: Label;
  form: FormikProps<Value>;
  placeholder: string;
  disabled: boolean;
  metadata: {dateType: DATE_TYPES};
  warnings: any;
}

function DatePicker({
  metadata: {dateType},
  field,
  label,
  form,
  warnings,
  disabled = false,
  placeholder = '[Seleccione fecha]',
  ...props
}: Props) {
  const isRange = [DATE_TYPES.RANGE_WITHOUT_HOUR, DATE_TYPES.RANGE_WITH_HOUR].includes(dateType);
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
        <FieldMessage warnings={warnings} form={form} field={field} disabled={disabled} />
      </Stack>
    </LocalizationProvider>
  );
}

export default DatePicker;
