import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const UserInfo = ({ name, username, location }) => {
  return (
    <>
      <Typography
        sx={{ fontWeight: 'bold', fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize' }, paddingBottom: 0.5 }}
        variant="h2"
      >
        {name}
      </Typography>

      <Typography
        color="textSecondary"
        variant="h6"
        sx={{ fontSize: { xs: 'h6.fontSize', sm: 'h5.fontSize' }, fontWeight: 400, }}
      >
        {`@${username}`}
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
