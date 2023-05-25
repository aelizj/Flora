import { Typography, Stack, Chip } from '@mui/material';
import { teal } from '@mui/material/colors';

const UserAchievements = ({ achievements }) => {
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
}

export default UserAchievements;
