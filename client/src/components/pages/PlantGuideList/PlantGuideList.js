import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@mui/material';
import { getPlantGuides } from '../../../store/features/plantGuides';
import AddPlantGuideDialog from './AddPlantGuideDialog';
import PlantGuideCard from './PlantGuideCard';

const PlantGuideList = ({ isAuthenticated }) => {
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
            {plantGuidesArray && plantGuidesArray.map(plantGuide => (
              <Grid item xs={4} key={plantGuide.id}>
                  <PlantGuideCard plantGuide={plantGuide}/>
                </Grid>
            ))}
        </Grid>
      </div>
      {isAuthenticated ? <AddPlantGuideDialog /> : <></>}
    </Container>
  );
};

export default PlantGuideList;
