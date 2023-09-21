import PropTypes from 'prop-types';
import {FastField} from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Modal from '@/components/Modal';
import Radio from '@/components/Radio';
import modals from '@/constants/modals';

const getChildren = (modal, {options, label, name}) => {
  switch (modal) {
  case modals.CONFIRM_DELETE_SECTION_MODAL:
    return (
      <>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Typography fontWeight="bold">Atención</Typography>
        </Box>
        <Typography>¿Esta seguro que desea borrar esta sección?</Typography>
      </>
    );
  case modals.INTERRUPTION_MODAL:
    return (
      <FastField component={Radio} options={options} label={label} name={name} />
    );
  default:
    return null;
  }
};

function Modals({
  modal, onAccept, open, onClose, ...props
}) {
  return (
    <Modal
      open={open}
      modal={modal}
      cancelButtonLabel="Cerrar"
      onAccept={onAccept}
      onClose={onClose}
    >
      {getChildren(modal, props)}
    </Modal>
  );
}

Modals.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func,
  modal: PropTypes.oneOf(Object.values(modals)),
  selectedSection: PropTypes.number,
  open: PropTypes.bool
};

Modals.defaultProps = {
  onAccept: undefined,
  selectedSection: undefined,
  modal: undefined,
  open: false
};

export default Modals;
