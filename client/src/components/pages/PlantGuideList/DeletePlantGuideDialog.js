import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import FlatButton from '../../ui/FlatButton';
import { PLANT_GUIDES_INDEX_URL } from '../../../constants/Routes';
import { deletePlantGuideById } from '../../../store/features/plantGuide';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
 } from '@mui/material';

const DeletePlantGuideDialog = ({ plantGuide }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const plantGuideId = plantGuide._id;
  const [dialogOpen, setDialogOpen] = useState(false);
  const { handleSubmit } = useForm();

  const handleClickOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const onSubmit = (data) => {
    data.id = plantGuideId;
    dispatch(deletePlantGuideById(data));
    handleCloseDialog();
    navigate(PLANT_GUIDES_INDEX_URL);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      p: 4
    }}>
      <Button
         variant='outlined'
         onClick={handleClickOpenDialog}
       >
        Delete
      </Button>

      <Dialog
        keepMounted
        fullWidth
        onClose={handleCloseDialog}
        open={dialogOpen}
        maxWidth='md'
      >
        <DialogTitle>
          <Typography variant='h5' color='secondary' sx={{ fontWeight: 500}}>
            Are you sure you want to delete this plant guide?
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ paddingBottom: 1 }}>
            This action is irreversible.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <FlatButton size="small" variant="outlined" onClick={handleCloseDialog} startIcon={<CancelRoundedIcon/>}>Cancel</FlatButton>
          <FlatButton color="error" size="small" variant="contained" onClick={handleSubmit(onSubmit)} endIcon={<DeleteRoundedIcon/>}>Confirm</FlatButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DeletePlantGuideDialog;
