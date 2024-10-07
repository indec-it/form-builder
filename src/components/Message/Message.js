import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Message({message}) {
  return <Typography sx={{fontWeight: 'bold', fontSize: '17px'}}>{message}</Typography>;
}

Message.propTypes = {
  message: PropTypes.string.isRequired
};

export default Message;
