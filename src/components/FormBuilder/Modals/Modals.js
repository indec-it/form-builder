import {FastField} from 'formik';

import Modal from '@/components/Modal';
import Radio from '@/components/Radio';
import modals from '@/constants/modals';

const getChildren = (modal, {options, label, name}) => {
  switch (modal) {
    case modals.CONFIRM_DELETE_SECTION_MODAL:
      return (
        <>
          <div className="fb:flex fb:justify-center">
            <p className="fb:font-bold">Atención</p>
          </div>
          <p>¿Esta seguro que desea borrar esta sección?</p>
        </>
      );
    case modals.INTERRUPTION_MODAL:
      return <FastField component={Radio} options={options} label={label} name={name} />;
    default:
      return null;
  }
};

function Modals({modal, onAccept, open = false, onClose, ...props}) {
  return (
    <Modal open={open} modal={modal} cancelButtonLabel="Cerrar" onAccept={onAccept} onClose={onClose}>
      {getChildren(modal, props)}
    </Modal>
  );
}

export default Modals;
