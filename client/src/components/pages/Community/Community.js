import React from 'react';
import { Container, Typography } from '@mui/material';

const Community = () => {
  return (
    <Container sx={{ p: 2 }}>
      <Typography variant="h2" component="h1" color="secondary">
        Community
      </Typography>
      <div className='community-post'></div>
    </Container>
  );
};

export default Community;