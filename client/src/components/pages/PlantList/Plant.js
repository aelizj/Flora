import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { getPlantById } from '../../../store/features/plant';
import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material';

const Plant = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, plant, error } = useSelector(state => state.plant);

  useEffect(() => {
    dispatch(getPlantById(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!plant) return <p>No plant data!</p>

  return (
    <Container maxWidth="100%" disableGutters>
      <Container sx={{ p:2 }} className='plantGuide'>
       <Box div className='plant-guide-header'>
       <Typography variant="h2" color="primary">
        {plant.commonName}
       </Typography>
       <Typography variant="h5" color="secondary" sx={{ fontStyle: 'italic' }}>
         ({plant.scientificName})
       </Typography>
       </Box>

       <Box div className='plant-guide-content'>
         <Grid container spacing={6} sx={{ mt: 1 }}>
           <Grid item xs="6">
             <Box sx={{}}>
               <Typography variant="h5" color="grey">
                 Description
               </Typography>
               <Typography variant="body" color="black">
                 <ReactMarkdown>{plant.description}</ReactMarkdown>
               </Typography>

               <Typography variant="h5" color="grey">
                 Caring for {plant.commonName}s
               </Typography>
               <Typography variant="body1" color="black">
                 <ReactMarkdown>{plant.careGuide}</ReactMarkdown>
               </Typography>
             </Box>
           </Grid>

           <Grid item xs={6}>
             <Box>
               <Card>
                 <CardMedia
                   component="img"
                   alt={'Picture of ' + plant.commonName}
                   sx={{ width: '100%', height: 'auto'}}
                   image={plant.imageUrl}
                 />
               </Card>
             </Box>
           </Grid>
         </Grid>
        </ Box>
      </Container>


    </Container>

  );
};

export default Plant;