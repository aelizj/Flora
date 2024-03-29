import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const PlantInfo = () => {
  return (
    <Container sx={{ p: 2 }}>
      <Typography component="h1" variant="h2" color="secondary">
        Plant Basics
      </Typography>
    </Container>
  );
};

export default PlantInfo;