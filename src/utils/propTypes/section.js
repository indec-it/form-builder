import PropTypes from 'prop-types';

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  introduction: PropTypes.string,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      introduction: PropTypes.string,
      type: PropTypes.number.isRequired,
      placeholder: PropTypes.string
    })
  ),
  multiple: PropTypes.bool.isRequired
});
