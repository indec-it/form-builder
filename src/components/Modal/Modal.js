import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MuiModal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import CancelIcon from '@mui/icons-material/Cancel';

import modals from '@/constants/modals';

function Modal({
  modal, onClose, onAccept, children, acceptButtonLabel, cancelButtonLabel, open
}) {
  return (
    <MuiModal
      open={modal > 0 && open}
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
        <Container>
          <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <IconButton onClick={onClose}>
              <CancelIcon color="info" />
            </IconButton>
          </Box>
          <Divider />
          {children}
          <Stack direction={{xs: 'column', sm: 'row'}} justifyContent="space-between" p={2} spacing={{xs: 1, sm: 2, md: 4}}>
            <Button onClick={onClose}>{cancelButtonLabel}</Button>
            {onAccept && <Button variant="contained" onClick={() => onAccept(modal)}>{acceptButtonLabel}</Button>}
          </Stack>
        </Container>
      </Box>
    </MuiModal>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func,
  acceptButtonLabel: PropTypes.string,
  cancelButtonLabel: PropTypes.string,
  modal: PropTypes.oneOf(Object.values(modals)),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  open: PropTypes.bool
};

Modal.defaultProps = {
  onAccept: null,
  acceptButtonLabel: 'Aceptar',
  cancelButtonLabel: 'Cancelar',
  modal: '',
  children: undefined,
  open: true
};

export default Modal;
