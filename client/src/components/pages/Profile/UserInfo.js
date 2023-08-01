import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const UserInfo = ({ name, email, location }) => {
  return (
    <>
      <Typography
        sx={{ fontWeight: 'bold', fontSize: { xs: 'h6.fontSize', sm: 'h4.fontSize' } }}
        variant="h5"
      >
        {name}
      </Typography>

      <Typography
        color="textSecondary"
        variant="body1"
        sx={{ fontSize: { xs: 'body2.fontSize', sm: 'body1.fontSize' } }}
      >
        {email}
      </Typography>

      <Typography
        color="textSecondary"
        variant="body2"
        sx={{ display: 'flex', alignItems: 'center', my: 1 }}
      >
        { location ? <LocationOnIcon fontSize="small" /> : <></> }
        {location}
      </Typography>
    </>
  );
}

export default UserInfo;
