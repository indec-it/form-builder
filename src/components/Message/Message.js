import '../output.css';

import PropTypes from 'prop-types';

function Message({message}) {
  return <p className="font-bold text-gray-500">{message}</p>;
}

Message.propTypes = {
  message: PropTypes.string.isRequired
};

export default Message;
