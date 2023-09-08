import React from 'react';
import FlatButton from '../../ui/FlatButton';
import { REGISTER_USER_URL, LOGIN_USER_URL } from '../../../constants/Routes';
import { styled, Box, Typography } from '@mui/material';

const HomePageButton = styled(FlatButton)(({ theme }) => ({
  color: '#fff',
  height: 65,
  width: 200,
}));

const HomePageLoginButton = styled(HomePageButton) (({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    color: '#fff'
  }
}));

const HomePageButtons = () => {
  return (
    <Box sx={{ flexGrow: 1, pt: 9, pb: 5, textAlign: 'center' }}>
      <HomePageButton aria-label='register' href={REGISTER_USER_URL} variant='contained' sx={{ marginRight: 3, backgroundColor: 'primary.light', outlineWidth: 'thick' }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Register
        </Typography>
      </HomePageButton>
      <HomePageLoginButton aria-label='login' href={LOGIN_USER_URL} variant='outlined' sx={{ color: 'secondary.main', backgroundColor: '#fff' }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Login
        </Typography>
      </HomePageLoginButton>
    </Box>
  );
};

export default HomePageButtons;
