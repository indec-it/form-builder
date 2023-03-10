import PropTypes from 'prop-types';
import {FastField} from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Modal from '@/components/Modal';
import QuestionBuilder from '@/components/QuestionBuilder';
import Radio from '@/components/Radio';
import modals from '@/constants/modals';

const getChildren = (modal, {
  values, index, section, options, label, name
}) => {
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
  case modals.PREVIEW_MODAL:
    return (
      <QuestionBuilder values={values} index={index} section={section} readOnlyMode />
    );
  case modals.INTERRUPTION_MODAL:
    return (
      <FastField component={Radio} options={options} label={label} name={name} required readOnlyMode={false} />
    );
  default:
    return null;
  }
};

function Modals({
  modal, acceptButtonLabel, cancelButtonLabel, onAccept, open, onClose, ...props
}) {
  return (
    <Modal
      open={open}
      modal={modal}
      acceptButtonLabel={acceptButtonLabel}
      cancelButtonLabel={cancelButtonLabel}
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
  acceptButtonLabel: PropTypes.string,
  cancelButtonLabel: PropTypes.string,
  modal: PropTypes.oneOf(Object.values(modals)),
  selectedSection: PropTypes.number,
  open: PropTypes.bool
};

Modals.defaultProps = {
  onAccept: undefined,
  acceptButtonLabel: undefined,
  cancelButtonLabel: undefined,
  selectedSection: undefined,
  modal: undefined,
  open: false
};

export default Modals;
