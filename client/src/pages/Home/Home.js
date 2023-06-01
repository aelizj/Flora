import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Home = () => {
  return (
    <Container sx={{ p: 2 }}>
      <Typography variant="h2" color="secondary">
        Welcome to Flora!
      </Typography>
      <Divider sx={{ p: 1 }}/>
      <Typography variant="body1" sx={{ p: 1 }} >
        Learn about plants, share your experiences, and connect with other plant enthusiasts!
      </Typography>
    </Container>
  );
};

export default Home;