import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Community = () => {
  return (
    <Container sx={{ p: 2 }}>
      <Typography variant="h2" color="secondary">
        Community
      </Typography>
      <div className='community-post'></div>
    </Container>
  );
};

export default Community;