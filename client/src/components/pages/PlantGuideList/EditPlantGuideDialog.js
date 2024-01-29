import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import FlatButton from '../../ui/FlatButton';
import { patchPlantGuideById } from '../../../store/features/plantGuide';
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

const EditPlantGuideDialog = ({ plantGuide }) => {
  const dispatch = useDispatch();
  const plantGuideId = plantGuide._id;
  const [dialogOpen, setDialogOpen] = useState(false);
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
    data.id = plantGuideId;
    dispatch(patchPlantGuideById(data));
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
         variant='outlined'
         onClick={handleClickOpenDialog}
       >
        Edit
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
            Edit plant guide
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ paddingBottom: 1 }}>
            Save your changes by hitting 'submit' below.
          </DialogContentText>

          <TextField
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
            defaultValue={plantGuide.commonName ? plantGuide.commonName : ''}
            error={!!errors.commonName}
            helperText={errors.commonName? errors.commonName.message : "Plant's colloquial name; i.e. Chinese money plant"}
          />

          <TextField
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
            defaultValue={plantGuide.scientificName ? plantGuide.scientificName : ''}
            error={!!errors.scientificName}
            helperText={errors.scientificName? errors.scientificName.message : "Plant's binomial scientific name; i.e. Pilea peperomioides"}
          />

          <TextField // TODO: Set up photo upload (GitHub Issue #12)
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
            defaultValue={plantGuide.imageUrl ? plantGuide.imageUrl : ''}
            error={!!errors.imageUrl}
            helperText={errors.imageUrl?.message}
          />

          <TextField
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
            defaultValue={plantGuide.description ? plantGuide.description : ''}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <TextField
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
            defaultValue={plantGuide.careGuide ? plantGuide.careGuide : ''}
            error={!!errors.careGuide}
            helperText={errors.careGuide?.message}
          />
        </DialogContent>

        <DialogActions>
          <FlatButton size="small" variant="outlined" onClick={handleCloseDialog} startIcon={<DeleteRoundedIcon/>}>Cancel</FlatButton>
          <FlatButton color="success" size="small" variant="contained" onClick={handleSubmit(onSubmit)} endIcon={<AddRoundedIcon/>}>Submit</FlatButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditPlantGuideDialog;
