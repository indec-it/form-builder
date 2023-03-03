import {useState} from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MuiTable from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import InputLabel from '@/components/InputLabel';
import {formikField, formikForm} from '@/utils/propTypes';

import EditInputModal from './EditInputModal';

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: 'bold'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

function Table({rows, columns, form, field, label, warnings, readOnlyMode}) {
  const [showEditInputModal, setShowEditInputModal] = useState(false);
  return (
    <>
      <EditInputModal
        open={showEditInputModal}
        rows={rows}
        columns={columns}
        onClose={() => {}}
        onAccept={() => {}}
        form={form}
        field={field}
        readOnlyMode={readOnlyMode}
      />
      <InputLabel warnings={warnings} required={false} form={form} field={field} label={label} readOnly={readOnlyMode} />
      <TableContainer component={Paper} sx={{mt: 4}}>
        <MuiTable sx={{minWidth: 700}} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <StyledTableCell key={column.id} align="center">{column.label}</StyledTableCell>
              ))}
              <StyledTableCell>Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {columns.map(column => (
              <StyledTableRow key={column.id}>
                {rows.map((row, index) => (
                  <StyledTableCell key={row.id} align="center">
                    {field.value[index][column.name]}
                  </StyledTableCell>
                ))}
                <StyledTableCell>
                  <IconButton color="primary" onClick={() => setShowEditInputModal(true)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </>
  );
}

Table.propTypes = {
  form: formikForm.isRequired,
  field: formikField.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  label: PropTypes.string.isRequired,
  warnings: PropTypes.shape({}),
  readOnlyMode: PropTypes.bool.isRequired
};

Table.defaultProps = {
  warnings: {}
};

export default Table;
