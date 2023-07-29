import { teal } from '@mui/material/colors';
import {
  Box,
  Typography,
  Stack,
  Chip
} from '@mui/material';

const UserAchievements = ({ achievements }) => {
  if (achievements && achievements.length > 0) {
    return (
      <>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Achievements
        </Typography>
        <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
          {achievements.map((achievement, index) => (
            <Chip
              key={index}
              label={achievement}
              color="success"
              variant="outlined"
              sx={{ bgcolor: teal[50] }}
            />
          ))}
        </Stack>
      </>
    );
  } else {
    return (
      <Box sx={{ p:2 }} />
    )
  }
}

export default UserAchievements;
