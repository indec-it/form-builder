import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done';

function NavigationButtons({
  onPrevious,
  onNext,
  disableNextButton,
  disablePreviousButton,
  nextButtonLabel,
  onAddNew,
  addButtonLabel,
  isLastSection,
  onInterrupt
}) {
  return (
    <Stack direction={{xs: 'column', sm: 'row'}} justifyContent="space-between" p={2} spacing={{xs: 1, sm: 2, md: 4}}>
      <Button startIcon={<ArrowBackIcon />} onClick={onPrevious} variant="outlined" disabled={disablePreviousButton}>
        Anterior
      </Button>
      <Stack direction={{xs: 'column', sm: 'row'}} spacing={2}>
        {onAddNew && <Button startIcon={<AddIcon />} onClick={onAddNew} variant="outlined">{addButtonLabel}</Button>}
        {onInterrupt && (
          <Button
            startIcon={<CancelIcon />}
            onClick={onInterrupt}
            variant="outlined"
            color="error"
          >
            Interrumpir encuesta
          </Button>
        )}
      </Stack>
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
  onInterrupt: PropTypes.func,
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
  onAddNew: null,
  onInterrupt: null
};

export default NavigationButtons;
