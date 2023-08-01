import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import {
  Box,
  IconButton,
  Paper,
  Typography,
  Stack,
  Chip
} from '@mui/material';

const UserCard = ({ category, items, handleClickAdd, handleDelete }) => {
  if (items) {
    return (
      <Paper elevation={3} sx={{ p: 2 }}>
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

        <Box>
          <IconButton aria-label="add" size="small" onClick={handleClickAdd}>
            <AddCircleOutlineRoundedIcon />
          </IconButton>
        </Box>
      </Paper>
    );
  }
}

export default UserCard;
