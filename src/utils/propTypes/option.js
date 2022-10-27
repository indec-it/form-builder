import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
});
