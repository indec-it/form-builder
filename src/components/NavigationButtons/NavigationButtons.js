import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';

function NavigationButtons({
  onPrevious, onNext, disableNextButton, disablePreviousButton, nextButtonLabel, onAddNew, addButtonLabel, isLastSection
}) {
  return (
    <Stack direction={{xs: 'column', sm: 'row'}} justifyContent="space-between" p={2} spacing={{xs: 1, sm: 2, md: 4}}>
      <Button startIcon={<ArrowBackIcon />} onClick={onPrevious} variant="outlined" disabled={disablePreviousButton}>
        Anterior
      </Button>
      {onAddNew && <Button startIcon={<AddIcon />} onClick={onAddNew} variant="outlined">{addButtonLabel}</Button>}
      <Button
        type="submit"
        startIcon={isLastSection ? <DoneIcon /> : undefined}
        endIcon={isLastSection ? undefined : <ArrowRightIcon />}
        onClick={onNext}
        variant="contained"
        disabled={disableNextButton}
        color={isLastSection ? 'success' : 'primary'}
      >
        {nextButtonLabel}
      </Button>
    </Stack>
  );
}

NavigationButtons.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onAddNew: PropTypes.func,
  disableNextButton: PropTypes.bool,
  disablePreviousButton: PropTypes.bool,
  isLastSection: PropTypes.bool,
  nextButtonLabel: PropTypes.string,
  addButtonLabel: PropTypes.string
};

NavigationButtons.defaultProps = {
  disableNextButton: false,
  disablePreviousButton: false,
  isLastSection: false,
  nextButtonLabel: 'Siguiente',
  addButtonLabel: 'Agregar nuevo',
  onAddNew: null
};

export default NavigationButtons;
