import Typography from '@mui/material/Typography';

interface Props {
  message: string;
}

function Message({message}: Props) {
  return (
    <Typography fontWeight="bold" color="gray">
      {message}
    </Typography>
  );
}

export default Message;
