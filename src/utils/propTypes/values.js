import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  answer: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.string)
      ])
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.arrayOf(PropTypes.string)
        ])
      })
    )
  ]),
  specifications: PropTypes.shape({
    optionId: PropTypes.number,
    name: PropTypes.string,
    answer: PropTypes.shape({value: PropTypes.string})
  })
});
