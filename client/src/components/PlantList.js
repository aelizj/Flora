import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import PlantCard from './PlantCard';
import plantData from '../lib/data.js';
import { Typography } from '@mui/material';
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
    <>
    <Typography variant="h1" color="secondary">
      Plants
    </Typography>
      <div>
        <Grid container spacing={0}>
            {plants.map(p => (
              <Grid item xs={4}>
                <PlantCard plant={p}/>
              </Grid>
            ))}
        </Grid>

      </div>
    </>
  );
};

export default PlantList;


