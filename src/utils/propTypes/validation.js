import PropTypes from 'prop-types';

export default PropTypes.shape({
  type: PropTypes.string.isRequired,
  messageType: PropTypes.oneOf(['warning', 'error']).isRequired,
  params: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
});
