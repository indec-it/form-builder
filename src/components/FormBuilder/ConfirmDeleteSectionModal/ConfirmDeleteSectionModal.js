import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function ConfirmDeleteSectionModal({
  open, onClose, onAccept
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        p: 4,
        borderRadius: '20px'
      }}
      >
        <Container maxWidth="md">
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography fontWeight="bold">Atención</Typography>
          </Box>
          <Typography>¿Esta seguro que desea borrar esta sección?</Typography>
          <Stack direction={{xs: 'column', sm: 'row'}} justifyContent="space-between" p={2} spacing={{xs: 1, sm: 2, md: 4}}>
            <Button fullWidth variant="outlined" onClick={onClose}>Cancelar</Button>
            <Button fullWidth variant="contained" onClick={onAccept}>Aceptar</Button>
          </Stack>
        </Container>
      </Box>
    </Modal>
  );
}

ConfirmDeleteSectionModal.propTypes = {
  onAccept: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default ConfirmDeleteSectionModal;
