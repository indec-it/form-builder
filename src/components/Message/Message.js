import Typography from '@mui/material/Typography';

function Message({message}) {
  return <Typography sx={{fontWeight: 'bold', fontSize: '17px'}}>{message}</Typography>;
}

export default Message;
