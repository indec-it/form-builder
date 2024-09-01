import PropTypes from 'prop-types';

function Introduction({introduction}) {
  if (!introduction) {
    return null;
  }
  return (
    <p data-testid="introduction" className="font-bold text-gray-600 whitespace-pre-line">
      {introduction}
    </p>
  );
}

Introduction.propTypes = {
  introduction: PropTypes.string
};

Introduction.defaultProps = {
  introduction: undefined
};

export default Introduction;
