import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Grid, Typography, TextField } from '@mui/material';
import { getPlantGuides } from '../../../store/features/plantGuides';
import AddPlantGuideDialog from './AddPlantGuideDialog';
import PlantGuideCard from './PlantGuideCard';

// const FilterBar = () => {
//   return (
//     <Container maxWidth="100%">
//       <Box sx={{ flexGrow: 1, py: 5}}>
//         <TextField size='small'></TextField>
//       </Box>
//     </Container>
//   )
// };

const PlantGuideList = ({ isAuthenticated }) => {
  const dispatch = useDispatch();
  const { loading, plantGuidesArray, error } = useSelector(state => state.plantGuides);
  const plantGuides = (plantGuidesArray) => {
    return (
      <div>
        <Grid container spacing={0}>
          {plantGuidesArray && plantGuidesArray.map(plantGuide => (
            <Grid item xs={4} key={plantGuide.id}>
              <PlantGuideCard plantGuide={plantGuide}/>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  };

  useEffect(() => {
    dispatch(getPlantGuides());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <>
      {/* <FilterBar></FilterBar> */}
      <Box sx={{justifyContent: 'center', p: 5}}>
        <Typography variant='h5' sx={{ fontWeight: 'bold'}}>
          There aren't any plant guides yet.
        </Typography>
      </Box>
    </>
  );

  return (
    <Container sx={{ p: 2 }}>
      <Typography component="h1" variant="h2" color="secondary" fontWeight='bold' sx={{ py: 5 }}>
        Plant Guides
      </Typography>
      {plantGuidesArray.length > 0 ? plantGuides(plantGuidesArray) : <></>}
      {isAuthenticated ? <AddPlantGuideDialog /> : <></>}
    </Container>
  );
};

export default PlantGuideList;
