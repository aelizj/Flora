import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@mui/material';
import { getPlantGuides } from '../../../store/features/plantGuides';
import AddPlantGuideDialog from './AddPlantGuideDialog';
import PlantGuideCard from './PlantGuideCard';

const PlantGuideList = () => {
  const dispatch = useDispatch();
  const { loading, plantGuidesArray, error } = useSelector(state => state.plantGuides);

  useEffect(() => {
    dispatch(getPlantGuides());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container sx={{ p: 2 }}>
      <Typography component="h1" variant="h2" color="secondary">
        Plant Guides
      </Typography>
      <div className="plant-grid">
        <Grid container spacing={0}>
            {plantGuidesArray && plantGuidesArray.map(p => (
              <Grid item xs={4} key={p.id}>
                  <PlantGuideCard plant={p}/>
                </Grid>
            ))}
        </Grid>
      </div>
      <AddPlantGuideDialog />
    </Container>
  );
};

export default PlantGuideList;
