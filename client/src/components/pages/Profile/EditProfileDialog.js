import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { editProfile } from '../../../store/features/user';
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
 import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
 import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
 import FlatButton from '../../ui/FlatButton';

const EditProfileDialog = () => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    location: '',
  });

  const handleClickOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmit = () => {
    dispatch(editProfile(userData));
    handleCloseDialog();
  };


  return (
    <Button variant="outlined">
      Edit Profile
    </Button>
  )
};

export default EditProfileDialog;
