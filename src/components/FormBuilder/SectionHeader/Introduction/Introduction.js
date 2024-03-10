import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Introduction({introduction}) {
  if (!introduction) {
    return null;
  }
  return (
    <Typography data-testid="introduction" fontWeight="bold" color="gray" whiteSpace="pre-line">
      {introduction}
    </Typography>
  );
}

Introduction.propTypes = {
  introduction: PropTypes.string
};

Introduction.defaultProps = {
  introduction: undefined
};

export default Introduction;
