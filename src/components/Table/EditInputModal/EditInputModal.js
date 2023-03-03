import {Fragment} from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';

import Modal from '@/components/Modal';
import TextField from '@/components/TextField';

function EditInputModal({rows, onClose, open, onAccept, columns, form, field, readOnlyMode}) {
  const handleChange = e => {
    console.log(e);
  };

  return (
    <Modal modal={4} onClose={onClose} open={open} onAccept={onAccept}>
      <Stack direction="column" spacing={2}>
        {columns.map(column => (
          <Fragment key={column.id}>
            {rows.map((row, index) => (
              <TextField
                key={row.id}
                form={form}
                field={{
                  ...field,
                  name: `${field.name}.${index}.${column.name}`,
                  value: `${field.value[index][column.name]}`
                }}
                label={row.label}
                readOnlyMode={readOnlyMode}
              />
            ))}
          </Fragment>
        ))}
      </Stack>
    </Modal>
  );
}

EditInputModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default EditInputModal;
