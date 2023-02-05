import PropTypes from 'prop-types';
import {useFormikContext} from 'formik';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done';

function NavigationButtons({
  onPrevious,
  disablePreviousButton,
  nextButtonLabel,
  onAddNew,
  addButtonLabel,
  isLastSection,
  onInterrupt
}) {
  const {submitForm} = useFormikContext();
  return (
    <Stack direction={{xs: 'column', sm: 'row'}} justifyContent="space-between" p={2} spacing={{xs: 1, sm: 2, md: 4}}>
      <Button
        data-testid="back-button"
        startIcon={<ArrowBackIcon />}
        onClick={onPrevious}
        variant="outlined"
        disabled={disablePreviousButton}
      >
        Anterior
      </Button>
      <Stack direction={{xs: 'column', sm: 'row'}} spacing={2}>
        {onAddNew && (
          <Button
            data-testid="add-new"
            startIcon={<AddIcon />}
            onClick={onAddNew}
            variant="outlined"
          >
            {addButtonLabel}
          </Button>
        )}
        {onInterrupt && (
          <Button
            data-testid="interrupt-survey"
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
        startIcon={isLastSection ? <DoneIcon /> : undefined}
        endIcon={isLastSection ? undefined : <ArrowRightIcon />}
        onClick={submitForm}
        variant="contained"
        color={isLastSection ? 'success' : 'primary'}
      >
        {nextButtonLabel}
      </Button>
    </Stack>
  );
}

NavigationButtons.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onInterrupt: PropTypes.func,
  onAddNew: PropTypes.func,
  disablePreviousButton: PropTypes.bool,
  isLastSection: PropTypes.bool,
  nextButtonLabel: PropTypes.string,
  addButtonLabel: PropTypes.string
};

NavigationButtons.defaultProps = {
  disablePreviousButton: false,
  isLastSection: false,
  nextButtonLabel: 'Siguiente',
  addButtonLabel: 'Agregar nuevo',
  onAddNew: null,
  onInterrupt: null
};

export default NavigationButtons;
