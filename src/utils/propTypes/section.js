import PropTypes from 'prop-types';

import subQuestion from './subQuestion';

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
      placeholder: PropTypes.string,
      subQuestions: PropTypes.arrayOf(subQuestion)
    })
  ),
  multiple: PropTypes.bool.isRequired,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.number
    })
  )
});
