import * as React from 'react';
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
 } from "@mui/material";

const AddPlantDialog = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClickOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      p: 4
    }}>
       <Button
         variant="contained"
         color="secondary"
         onClick={handleClickOpenDialog}
       >
        <Typography variant="h5">
          Add a Plant
        </Typography>
      </Button>

      <Dialog
        sx={{
          backdropFilter: "blur(5px)",
        }}
        keepMounted
        fullWidth
        onClose={handleCloseDialog}
        open={dialogOpen}
        maxWidth="md"
      >
        <DialogTitle>
          <Typography variant='h5' color="secondary" sx={{ fontWeight: 500}}>
            New Plant
          </Typography></DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ paddingBottom: 1 }}>
              To add a plant care guide to this page, fill out the form below.
            </DialogContentText>

            <TextField // common name
              id="commonName"
              label="Common Name"
              autoFocus
              required
              fullWidth
              margin="dense"
              variant="filled"
              color='primary'
              size="small"
              helperText="Plant's colloquial name; i.e. Chinese money plant"
            />

            <TextField // scientific name
              id="scientificName"
              label="Scientific Name"
              autoFocus
              required
              fullWidth
              margin="dense"
              variant="filled"
              color='primary'
              size="small"
              helperText="Plant's binomial scientific name; i.e. Pilea peperomioides"
            />

            <TextField // imageUrl
              id="imageUrl"
              label="Image URL"
              autoFocus
              fullWidth
              margin="dense"
              variant="filled"
              color='primary'
              size="small"
            />

            <TextField // description
              id="description"
              label="Description"
              autoFocus
              multiline
              fullWidth
              margin="dense"
              variant="filled"
              color='primary'
              minRows={2}
              maxRows={4}
              size="small"
            />

            <TextField // care guide
              id="careGuide"
              label="Care Guide"
              autoFocus
              multiline
              fullWidth
              margin="dense"
              variant="filled"
              color='primary'
              minRows={4}
              maxRows={8}
              size="small"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialog}>Save</Button>
          <Button onClick={handleCloseDialog}>Submit</Button>

        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddPlantDialog;
