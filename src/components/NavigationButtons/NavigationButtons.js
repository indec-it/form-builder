import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function NavigationButtons({
  onPrevious, onNext, disableNextButton, disablePreviousButton
}) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Button onClick={onPrevious} variant="outlined" disabled={disablePreviousButton}>Anterior</Button>
      <Button type="submit" onClick={onNext} variant="contained" disabled={disableNextButton}>Siguiente</Button>
    </Stack>
  );
}

NavigationButtons.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  disableNextButton: PropTypes.bool,
  disablePreviousButton: PropTypes.bool
};

NavigationButtons.defaultProps = {
  disableNextButton: false,
  disablePreviousButton: false
};

export default NavigationButtons;
