import React from 'react';
import { Typography, Divider } from '@mui/material';

const Home = () => {
  return (
    <div className='home'>
      <Typography variant="h2" color="secondary">
        Welcome to Flora!
      </Typography>
      <Divider sx={{ p: 1 }}/>
      <Typography variant="body1" sx={{ p: 1 }} >
        Learn about plants, share your experiences, and connect with other plant enthusiasts!
      </Typography>
    </div>
  );
};

export default Home;