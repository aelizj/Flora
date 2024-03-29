import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import FlatButton from '../../ui/FlatButton';
import { patchUser } from '../../../store/features/user';
import { VALID_EMAIL_PATTERN } from '../../../constants/Validation.js';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
 } from '@mui/material';

const EditProfileDialog = ({ user }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.user._id);
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
    data.id = id;
    dispatch(patchUser(data));
    handleCloseDialog();
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
      <Button variant="outlined" onClick={handleClickOpenDialog}>
        Edit Profile
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
            Edit profile
          </Typography>
        </DialogTitle>

        <DialogContent>
          <TextField
            {...register('firstName', {
              required: 'First name is required',
              maxLength: {
                value: 140,
                message: "First name may not be longer than 140 characters",
              }
            })}
            id='firstName'
            label='First Name'
            autoFocus
            fullWidth
            margin='dense'
            color='primary'
            size='small'
            defaultValue={ user.firstName ? user.firstName : ''}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />

          <TextField
            {...register('lastName', {
              required: 'Last name is required',
              maxLength: {
                value: 140,
                message: "Last name may not be longer than 140 characters",
              }
            })}
            id='lastName'
            label='Last Name'
            autoFocus
            fullWidth
            margin='dense'
            color='primary'
            size='small'
            defaultValue={user.lastName ? user.lastName : ''}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />

         <TextField
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: VALID_EMAIL_PATTERN,
                message: 'Must enter a valid email address',
              }
            })}
            id='email'
            label='Email'
            autoFocus
            fullWidth
            margin='dense'
            color='primary'
            size='small'
            defaultValue={user.email ? user.email : ''}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField // TODO: Set up photo upload (GitHub Issue #12)
            {...register('profileImageUrl', {
              maxLength: {
                value: 500,
                message: "Url may not be longer than 500 characters",
              }
            })}
            id='profileImageUrl'
            label='Profile Image URL'
            autoFocus
            multiline
            fullWidth
            margin='dense'
            color='primary'
            size='small'
            defaultValue={user.profileImageUrl ? user.profileImageUrl : ''}
            error={!!errors.profileImageUrl}
            helperText={errors.bio?.profileImageUrl}
          />

          <TextField // TODO: Set up photo upload (GitHub Issue #12)
            {...register('coverImageUrl', {
              maxLength: {
                value: 500,
                message: "Url may not be longer than 500 characters",
              }
            })}
            id='coverImageUrl'
            label='Cover Image URL'
            autoFocus
            multiline
            fullWidth
            margin='dense'
            color='primary'
            size='small'
            defaultValue={user.coverImageUrl ? user.coverImageUrl : ''}
            error={!!errors.coverImageUrl}
            helperText={errors.bio?.coverImageUrl}
          />

          <TextField
            {...register('location', {
              maxLength: {
                value: 140,
                message: "Location may not be longer than 140 characters",
              }
            })}
            id='location'
            label='Location'
            autoFocus
            multiline
            fullWidth
            margin='dense'
            color='primary'
            size='small'
            placeholder= 'i.e., New York, NY'
            defaultValue={user.location ? user.location : ''}
            error={!!errors.location}
            helperText={errors.location?.message}
          />

          <TextField
            {...register('bio', {
              maxLength: {
                value: 2500,
                message: "Bio may not be longer than 2,500 characters",
              }
            })}
            id='bio'
            label='Bio'
            autoFocus
            multiline
            fullWidth
            margin='dense'
            color='primary'
            minRows={2}
            maxRows={4}
            size='small'
            placeholder= "Tell us something about yourself!"
            defaultValue={user.bio ? user.bio : ''}
            error={!!errors.bio}
            helperText={errors.bio?.message}
          />
        </DialogContent>

        <DialogActions>
          <FlatButton size="small" variant="outlined" onClick={handleCloseDialog} startIcon={<DeleteRoundedIcon/>}>Cancel</FlatButton>
          <FlatButton color="success" size="small" variant="contained" onClick={handleSubmit(onSubmit)} endIcon={<SaveRoundedIcon/>}>Save</FlatButton>
        </DialogActions>
      </Dialog>
    </Box>

  );
};

export default EditProfileDialog;
