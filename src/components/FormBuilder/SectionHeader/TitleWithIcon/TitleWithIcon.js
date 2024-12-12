import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

function TitleWithIcon({title, isValid}) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        alignItems: 'center'
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold'
        }}
      >
        {title}
      </Typography>
      {isValid ? (
        <CheckCircleIcon color="success" data-testid="success-icon" />
      ) : (
        <ErrorIcon color="error" data-testid="error-icon" />
      )}
    </Stack>
  );
}

export default TitleWithIcon;
