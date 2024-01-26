import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Message({message}) {
  console.log('aca');
  return (
    <Typography fontWeight="bold" color="gray" whiteSpace="pre-line">
      {message}
    </Typography>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired
};

export default Message;
