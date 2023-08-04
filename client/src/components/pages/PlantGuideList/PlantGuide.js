import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { useParams, Link } from 'react-router-dom';
import { getPlantGuideById } from '../../../store/features/plantGuide';
import { PLANT_GUIDES_INDEX_URL } from '../../../constants/Routes';
import {
  Box,
  Breadcrumbs,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@mui/material';

const PlantGuide = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, plantGuide, error } = useSelector(state => state.plantGuide);

  useEffect(() => {
    dispatch(getPlantGuideById(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!plantGuide) return <p>No plant data!</p>

  return (
    <Container maxWidth="100%" disableGutters>
      <Box span className="back-button" sx={{ p:5 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={PLANT_GUIDES_INDEX_URL} >
            <Typography color="dimgrey">
              Plant Guides
            </Typography>
          </Link>
          <Typography color="text.primary">{plantGuide.commonName}</Typography>
        </Breadcrumbs>
      </Box>
      <Container sx={{ p:2 }} className='plantGuide'>
        <Box div className='plant-guide-header'>
          <Typography component="h1" variant="h2" color="primary">
            {plantGuide.commonName}
          </Typography>
          <Typography component="h2" variant="h5" color="secondary" sx={{ fontStyle: 'italic' }}>
            ({plantGuide.scientificName})
          </Typography>
        </Box>
        <Box div className='plant-guide-content'>
          <Grid container spacing={6} sx={{ mt: 1 }}>
            <Grid item xs="6">
              <Box sx={{}}>
                <Typography component="h3" variant="h5" color="grey">
                  Description
                </Typography>
                <Typography variant="body" color="black">
                  <ReactMarkdown>{plantGuide.description}</ReactMarkdown>
                </Typography>
                <Typography component="h3" variant="h5" color="grey">
                  Caring for {plantGuide.commonName}
                </Typography>
                <Typography variant="body1" color="black">
                  <ReactMarkdown>{plantGuide.careGuide}</ReactMarkdown>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Card>
                  <CardMedia
                    component="img"
                    alt={'Picture of ' + plantGuide.commonName}
                    sx={{ width: '100%', height: 'auto'}}
                    image={plantGuide.imageUrl}
                  />
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default PlantGuide;
