import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles({
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: 20,
    textAlign: 'center',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.footer}>
      <Toolbar>
        <Typography variant="body1">
          Copyright ©Flora 2023
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

