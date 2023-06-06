import React, { useEffect } from 'react';
import AddPlantDialog from './AddPlantDialog';
import PlantCard from './PlantCard';
import plantData from '../../../lib/data';
import { Container, Grid, Typography } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPlants } from '../store/actions/plantsActions';

const PlantList = () => {
  const plants = plantData;

  // const dispatch = useDispatch();
  // const { plants, loading, error } = useSelector(state => state.plants);

  // useEffect(() => {
  //   dispatch(fetchPlants());
  // }, [dispatch]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <Container sx={{ p: 2 }}>
      <Typography variant="h2" color="secondary">
        Plants
      </Typography>

      <div className="plant-grid">
        <Grid container spacing={0}>
            {plants.map(p => (
              <Grid item xs={4}>
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


