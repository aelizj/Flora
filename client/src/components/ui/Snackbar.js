import * as React from 'react';
import Button from '@mui/material/Button';
import FlatButton from './FlatButton';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleSnackbar(buttonText, messageText) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <FlatButton onClick={handleClick}>{buttonText}</FlatButton>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={messageText}
        action={action}
      />
    </div>
  );
}