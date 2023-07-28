import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPlant } from '../../../store/features/plants';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Typography,
 } from '@mui/material';
 import AddRoundedIcon from '@mui/icons-material/AddRounded';
 import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
 import FlatButton from '../../ui/FlatButton';
import { useForm } from 'react-hook-form';


const AddPlantDialog = () => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = React.useState(false);
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

  const onSubmit = (data) => {
    dispatch(createPlant(data));
    handleCloseDialog();
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      p: 4
    }}>
      <Button
         variant='contained'
         color='secondary'
         onClick={handleClickOpenDialog}
       >
          Add a Plant
      </Button>

      <Dialog
        sx={{
          backdropFilter: 'blur(5px)',
        }}
        keepMounted
        fullWidth
        onClose={handleCloseDialog}
        open={dialogOpen}
        maxWidth='md'
      >
        <DialogTitle>
          <Typography variant='h5' color='secondary' sx={{ fontWeight: 500}}>
            Add a plant guide
          </Typography>
        </DialogTitle>

        <DialogContent>
          <DialogContentText sx={{ paddingBottom: 1 }}>
            To add a plant care guide to this page, fill out the form below.
          </DialogContentText>

          <TextField // common name
            {...register('commonName', {
              required: 'Common name is required',
              maxLength: {
                value: 140,
                message: "Common name may not be longer than 140 characters"
              }
            })}
            id='commonName'
            label='Common Name'
            autoFocus
            required
            fullWidth
            margin='dense'
            color='primary'
            size='small'
            error={!!errors.commonName}
            helperText={errors.commonName? errors.commonName.message : "Plant's colloquial name; i.e. Chinese money plant"}
          />

          <TextField // scientific name
            {...register('scientificName', {
              required: 'Scientific name is required',
              maxLength: {
                value: 140,
                message: "Scientific name may not be longer than 140 characters"
              }
            })}
            id='scientificName'
            label='Scientific Name'
            autoFocus
            required
            fullWidth
            margin='dense'
            color='primary'
            size='small'
            error={!!errors.scientificName}
            helperText={errors.scientificName? errors.scientificName.message : "Plant's binomial scientific name; i.e. Pilea peperomioides"}
          />

         <TextField // imageUrl
            {...register('imageUrl', {
              maxLength: {
                value: 250,
                message: "Image URL may not be longer than 250 characters"
              }
            })}
            id='imageUrl'
            label='Image URL'
            autoFocus
            fullWidth
            margin='dense'
            color='primary'
            size='small'
            error={!!errors.imageUrl}
            helperText={errors.imageUrl?.message}

          />

          <TextField // description
            {...register('description', {
              maxLength: {
                value: 2500,
                message: "Description may not be longer than 2,500 characters"
              }
            })}
            id='description'
            label='Description'
            autoFocus
            multiline
            fullWidth
            margin='dense'
            color='primary'
            minRows={2}
            maxRows={4}
            size='small'
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <TextField // care guide
            {...register('careGuide', {
              maxLength: {
                value: 10000,
                message: "Care guide may not be longer than 5,000 characters"
              }
            })}
            id='careGuide'
            label='Care Guide'
            autoFocus
            multiline
            fullWidth
            margin='dense'
            color='primary'
            minRows={4}
            maxRows={8}
            size='small'
            error={!!errors.careGuide}
            helperText={errors.careGuide?.message}
          />
        </DialogContent>

        <DialogActions>
          <FlatButton size="small" variant="outlined" onClick={handleCloseDialog} startIcon={<DeleteRoundedIcon/>}>Cancel</FlatButton>
          <FlatButton color="success" size="small" variant="contained" onClick={handleSubmit(onSubmit)} endIcon={<AddRoundedIcon/>}>Add</FlatButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddPlantDialog;
