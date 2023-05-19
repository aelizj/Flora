import React from 'react';
import { Typography, Divider } from '@mui/material';

const Home = () => {
  return (
    <div className='home'>
      <Typography variant="h4">
        Welcome to Flora!
      </Typography>
      <Divider />
      <Typography variant="body1">
        Learn about plants, share your experiences, and connect with other plant enthusiasts!
      </Typography>
    </div>
  );
};

export default Home;