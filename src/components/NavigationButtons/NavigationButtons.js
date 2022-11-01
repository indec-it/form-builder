import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function NavigationButtons({
  onPrevious, onNext, disableNextButton, disablePreviousButton, nextButtonLabel, onAddNew, addButtonLabel
}) {
  return (
    <Stack direction={{xs: 'column', sm: 'row'}} justifyContent="space-between" p={2} spacing={{xs: 1, sm: 2, md: 4}}>
      <Button onClick={onPrevious} variant="outlined" disabled={disablePreviousButton}>Anterior</Button>
      {onAddNew && <Button onClick={onAddNew} variant="outlined">{addButtonLabel}</Button>}
      <Button type="submit" onClick={onNext} variant="contained" disabled={disableNextButton}>{nextButtonLabel}</Button>
    </Stack>
  );
}

NavigationButtons.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onAddNew: PropTypes.func,
  disableNextButton: PropTypes.bool,
  disablePreviousButton: PropTypes.bool,
  nextButtonLabel: PropTypes.string,
  addButtonLabel: PropTypes.string
};

NavigationButtons.defaultProps = {
  disableNextButton: false,
  disablePreviousButton: false,
  nextButtonLabel: 'Siguiente',
  addButtonLabel: 'Agregar nuevo',
  onAddNew: null
};

export default NavigationButtons;
