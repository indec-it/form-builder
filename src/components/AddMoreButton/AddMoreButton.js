import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

function AddMoreButton({onAdd}) {
  <IconButton
    onClick={onAdd}
    color="primary"
    sx={{fontSize: '14px'}}
  >
    <AddIcon />
    {' '}
    Agregar más
  </IconButton>;
}

AddMoreButton.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddMoreButton;
