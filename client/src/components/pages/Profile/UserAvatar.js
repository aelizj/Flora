import { Box, Avatar } from '@mui/material';
import { lightGreen } from '@mui/material/colors';

const UserAvatar = ({ avatar }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        bottom: '28px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Avatar
        sx={{
          bgcolor: lightGreen[400],
          height: { xs: 56, sm: 80 },
          width: { xs: 56, sm: 80 }
        }}
        src={avatar}
      />
    </Box>
  );
}

export default UserAvatar;
