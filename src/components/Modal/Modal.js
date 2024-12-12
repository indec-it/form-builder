import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MuiModal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import CancelIcon from '@mui/icons-material/Cancel';

function Modal({
  modal,
  onClose,
  onAccept,
  children,
  acceptButtonLabel = 'Aceptar',
  cancelButtonLabel = 'Cancelar',
  open = true
}) {
  return (
    <MuiModal open={modal > 0 && open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: '20px'
        }}
      >
        <Container>
          <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <IconButton data-testid="close-button-icon" onClick={onClose}>
              <CancelIcon color="info" />
            </IconButton>
          </Box>
          <Divider />
          {children}
          <Stack
            direction={{xs: 'column', sm: 'row'}}
            spacing={{xs: 1, sm: 2, md: 4}}
            sx={{
              justifyContent: 'space-between',
              p: 2
            }}
          >
            <Button data-testid="close-button" onClick={onClose}>
              {cancelButtonLabel}
            </Button>
            {onAccept && (
              <Button variant="contained" data-testid="accept-button" onClick={() => onAccept(modal)}>
                {acceptButtonLabel}
              </Button>
            )}
          </Stack>
        </Container>
      </Box>
    </MuiModal>
  );
}

export default Modal;
