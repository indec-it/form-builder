import PropTypes from 'prop-types';
import MuiRadio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';

import FieldMessage from '@/components/FieldMessage';
import InputLabel from '@/components/InputLabel';
import breakpoints from '@/constants/breakpoints';
import useBreakpoint from '@/hooks/useBreakpoint';
import {formikField, formikForm} from '@/utils/propTypes';

import MobileRadio from './MobileRadio';

function Radio({
  options, field, disabled, label, form, warnings
}) {
  const {breakpoint} = useBreakpoint();
  return breakpoint === breakpoints.EXTRA_SMALL
    ? (
      <MobileRadio
        options={options}
        field={field}
        disabled={disabled}
        label={label}
        form={form}
        warnings={warnings}
      />
    ) : (
      <Stack direction="column" spacing={2} sx={{width: '100%'}} data-testid="radio">
        <InputLabel warnings={warnings} form={form} field={field} label={label} disabled={disabled} />
        <RadioGroup {...field}>
          {options.map((option, index) => (
            <FormControlLabel
              data-testid={`radio-${index}`}
              key={option.value}
              value={option.value}
              control={<MuiRadio />}
              label={option.label}
              disabled={disabled}
              checked={option.value === field.value}
            />
          ))}
        </RadioGroup>
        <FieldMessage form={form} field={field} warnings={warnings} disabled={disabled} />
      </Stack>
    );
}

Radio.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  field: formikField.isRequired,
  form: formikForm.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  warnings: PropTypes.shape({})
};

Radio.defaultProps = {
  warnings: {},
  disabled: false
};

export default Radio;
