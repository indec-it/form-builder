import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Introduction({introduction}) {
  if (!introduction) {
    return null;
  }
  const isHTML = /<[^>]+>/g.test(introduction);

  if (isHTML) {
    return (
      <Typography
        data-testid="introduction"
        fontWeight="bold"
        color="gray"
        whiteSpace="pre-line"
        dangerouslySetInnerHTML={{__html: introduction}}
      />
    );
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
