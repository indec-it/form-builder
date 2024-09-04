import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';

interface Props {
  onPrevious: (e) => void;
  disablePreviousButton: boolean;
  readOnlyMode: boolean;
  onAddNew?: (e) => void;
  onInterrupt?: (e) => void;
}

function NavigationButtons({onPrevious, disablePreviousButton = false, onAddNew, onInterrupt, readOnlyMode = false}: Props) {
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
      {!readOnlyMode && (
        <Stack direction={{xs: 'column', sm: 'row'}} spacing={2}>
          {onAddNew && (
            <Button data-testid="add-new" startIcon={<AddIcon />} onClick={onAddNew} variant="outlined">
              Agregar nuevo
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
      )}
      <Button type="submit" endIcon={<ArrowRightIcon />} variant="contained" color="primary">
        Siguiente
      </Button>
    </Stack>
  );
}

export default NavigationButtons;
