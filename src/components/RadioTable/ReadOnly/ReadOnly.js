import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import formikField from '@/utils/propTypes/formikField';
import optionPropTypes from '@/utils/propTypes/option';
import getSelectedOptionLabel from '@/utils/getSelectedOptionLabel';

function ReadOnly({options, field}) {
  return (
    <Box data-testid="read-only">
      {options.map(option => (
        <Box key={option.id}>
          <Stack direction={{xs: 'column', sm: 'row'}} spacing={5}>
            <Box sx={{width: '400px'}}>
              <Typography>{option.title}</Typography>
            </Box>
            <Typography
              data-testid={`selected-option-${option.id}`}
            >
              {getSelectedOptionLabel(option.subOptions, field.value[option.name])}
            </Typography>
          </Stack>
        </Box>
      ))}
    </Box>
  );
}

ReadOnly.propTypes = {
  field: formikField.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subOptions: PropTypes.arrayOf(
        optionPropTypes
      )
    })
  ).isRequired
};

export default ReadOnly;
