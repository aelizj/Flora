import * as React from 'react';
import {
  Box,
  Container,
  Typography
} from '@mui/material';

const StickyFooter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '90vh',
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container maxWidth="100%" sx={{justifyContent: 'space-evenly', component: 'div',}}>
          <Typography variant="footer" color="primary"  sx={{ flexGrow: 1,  }}>
            Copyright ©Flora 2023
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default StickyFooter;
