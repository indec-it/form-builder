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
        color="gray"
        dangerouslySetInnerHTML={{__html: introduction}}
        sx={{
          fontWeight: 'bold',
          whiteSpace: 'pre-line'
        }}
      />
    );
  }

  return (
    <Typography
      data-testid="introduction"
      color="gray"
      sx={{
        fontWeight: 'bold',
        whiteSpace: 'pre-line'
      }}
    >
      {introduction}
    </Typography>
  );
}

export default Introduction;
