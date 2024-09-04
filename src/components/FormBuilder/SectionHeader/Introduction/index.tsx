import Typography from '@mui/material/Typography';

interface Props {
  introduction?: string;
}

function Introduction({introduction}: Props) {
  if (!introduction) {
    return null;
  }
  return (
    <Typography data-testid="introduction" fontWeight="bold" color="gray" whiteSpace="pre-line">
      {introduction}
    </Typography>
  );
}

export default Introduction;
