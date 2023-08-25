import PropTypes from 'prop-types';

export default PropTypes.shape({
  label: PropTypes.shape({
    text: PropTypes.string.isRequired,
    number: PropTypes.string
  })
});
