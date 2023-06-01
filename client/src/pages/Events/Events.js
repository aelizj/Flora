import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import Event from './Event.js';


const Events = () => {
  return (
    <Container sx={{ p: 2 }}>
      <Typography variant="h2" color="secondary">
        Events
      </Typography>
      <div>
        {/* map through events and send each to Event component */}
      </div>
    </Container>
  );
};

export default Events;