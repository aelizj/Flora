import { Paper, Typography, Stack, Chip } from '@mui/material';

const UserCard = ({ category, items }) => {
  if (items) {
    return (
      <Paper elevation={2} sx={{ padding: 2 }}>
        <Typography variant="h6">{category}</Typography>
        <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
          {items.map((item, i) => (
            <Chip key={i} label={item} color="primary" sx={{ mb:1, fontWeight: 600 }}/>
          ))}
        </Stack>
      </Paper>
    );
  }
}

export default UserCard;
