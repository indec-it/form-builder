import PropTypes from 'prop-types';

export default PropTypes.shape({
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({start: PropTypes.string, end: PropTypes.string})
  ]).isRequired
});
