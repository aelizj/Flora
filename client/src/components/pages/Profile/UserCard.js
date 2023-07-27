import { Box, Fab, Paper, Typography, Stack, Chip } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const UserCard = ({ category, items, handleClickAdd, handleDelete }) => {
  if (items) {
    return (
      <Paper elevation={2} sx={{ padding: 2 }}>
        <Box component="span">
          <Typography variant="h6" marginBottom={1}>{category}</Typography>
        </Box>

        <Stack direction="row" useFlexGap spacing={1} my={1} flexWrap="wrap">
          {items.map((item, i) => (
            <Chip
              key={i}
              label={item}
              color="secondary"
              sx={{ fontWeight: 600 }}
              onDelete={handleDelete}
            />
          ))}
        </Stack>

        <Box sx={{ '& > :not(style)': { m: 1 } }} >
          <Fab color="grey" aria-label="add" size="small" onClick={handleClickAdd}>
            <AddRoundedIcon />
          </Fab>
        </Box>
      </Paper>
    );
  }
}

export default UserCard;
