import {FastField} from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Modal from '@/components/Modal';
import Radio from '@/components/Radio';
import modals from '@/constants/modals';
import {Label, Option} from '@/lib/definitions';

const getChildren = ({
  modal,
  options,
  label,
  name
}: {
  modal: 2 | 3;
  options: Option[];
  label: Label['label'];
  name: string;
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
    case modals.INTERRUPTION_MODAL:
      return <FastField component={Radio} options={options} label={label} name={name} />;
    default:
      return null;
  }
};

interface Props {
  modal: 2 | 3;
  onClose: (e) => void;
  onAccept?: (e) => void;
  selectedOption?: number;
  open: boolean;
  label: Label['label'];
  name: string;
  options: Option[];
}

function Modals({modal, onAccept, open, onClose, options, label, name}: Props) {
  return (
    <Modal open={open} modal={modal} cancelButtonLabel="Cerrar" onAccept={onAccept} onClose={onClose}>
      {getChildren({modal, options, label, name})}
    </Modal>
  );
}

export default Modals;
