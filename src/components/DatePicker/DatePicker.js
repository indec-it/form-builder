import {es} from 'date-fns/locale/es';

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
    <div className="fb:flex fb:flex-col">
      <InputLabel label={label} form={form} field={field} warnings={warnings} disabled={disabled} />
      <div className="fb:flex fb:flex-col fb:sm:flex-row fb:gap-2 fb:sm:gap-4">
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
          locale={es}
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
            locale={es}
          />
        )}
      </div>
      <FieldMessage warnings={warnings} form={form} field={field} />
    </div>
  );
}

export default DatePicker;
