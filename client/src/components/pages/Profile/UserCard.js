import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import {
  Box,
  IconButton,
  Paper,
  Typography,
  Stack,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';
import FlatButton from '../../ui/FlatButton';
import { patchUser } from '../../../store/features/user';

const UserCard = ({ user, category }) => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const id = user._id
  const items = user[category]
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleClickOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleAddChip = (data) => {
    const updatedCategory = [...user[category], data.plantName];
    dispatch(patchUser({ id, [category]: updatedCategory }));
    handleCloseDialog();
  };

  const handleChipDelete = (category, item) => {
    const updatedCategory = user[category.toLowerCase()].filter(chip => chip !== item);
    dispatch(patchUser({ id, [category.toLowerCase()]: updatedCategory }));
  };

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
              onDelete={() => handleChipDelete(category, item)}
            />
          ))}
        </Stack>

        <Box>
          <IconButton aria-label="add" size="small" onClick={() => handleClickOpenDialog(category)}>
            <AddCircleOutlineRoundedIcon />
          </IconButton>

        <Dialog
          keepMounted
          fullWidth
          onClose={handleCloseDialog}
          open={dialogOpen}
          maxWidth='xs'
        >
          <DialogTitle>
            <Typography variant='h6' color='secondary' sx={{ fontWeight: 500}}>
              {`Add to ${category}`}
            </Typography>
          </DialogTitle>

          <DialogContent>
            <TextField
              {...register('plantName', {
                required: 'Plant name is required',
                maxLength: {
                  value: 140,
                  message: "Plant name may not be longer than 140 characters",
                },
                validate: {
                  noDuplicates: (value) => items.filter(i => i === value).length === 0 || "That's already on your list"
                }
              })}
              id='plantName'
              label='Plant Name'
              autoFocus
              fullWidth
              margin='dense'
              color='primary'
              size='small'
              error={!!errors.plantName}
              helperText={errors.plantName?.message}
            />
          </DialogContent>

          <DialogActions>
            <FlatButton size="small" variant="outlined" onClick={handleCloseDialog} startIcon={<DeleteRoundedIcon/>}>Cancel</FlatButton>
            <FlatButton color="success" size="small" variant="contained" onClick={handleSubmit(handleAddChip)} endIcon={<SaveRoundedIcon/>}>Save</FlatButton>
          </DialogActions>
        </Dialog>

        </Box>
      </Paper>
    );
  }
}

export default UserCard;
