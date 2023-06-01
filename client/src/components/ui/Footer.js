import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

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
