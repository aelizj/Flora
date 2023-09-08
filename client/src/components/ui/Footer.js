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
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 1,
          px: 0,
          mt: 'auto',
          backgroundColor: "#EDF1EA"
        }}
      >
        <Container maxWidth="100%" sx={{ justifyContent: 'space-evenly', component: 'div',  }}>
          <Typography variant="footer" color="text.primary"  sx={{ flexGrow: 1, fontWeight: 'normal' }}>
            Copyright ©Flora 2023
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default StickyFooter;
