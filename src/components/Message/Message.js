import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Message({message}) {
  return (
    <Typography fontWeight="bold" color="gray">
      {message}
    </Typography>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired
};

export default Message;
