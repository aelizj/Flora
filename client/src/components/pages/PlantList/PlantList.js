import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlants } from '../../../store/features/plants';
import AddPlantDialog from './AddPlantDialog';
import PlantCard from './PlantCard';
import { Container, Grid, Typography } from '@mui/material';

const PlantList = () => {
  const dispatch = useDispatch();
  const { loading, plantsArray, error } = useSelector(state => state.plants);

  useEffect(() => {
    dispatch(getPlants());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container sx={{ p: 2 }}>
      <Typography variant="h2" color="secondary">
        Plants
      </Typography>
      <div className="plant-grid">
        <Grid container spacing={0}>
            {plantsArray && plantsArray.map(p => (
              <Grid item xs={4} key={p.id}>
                <PlantCard plant={p}/>
              </Grid>
            ))}
        </Grid>
      </div>
      <AddPlantDialog />
    </Container>
  );
};

export default PlantList;
