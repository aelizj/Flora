import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { useParams, Link } from 'react-router-dom';
import { getPlantById } from '../../../store/features/plant';
import {
  Box,
  Breadcrumbs,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@mui/material';

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
      <Box span className="back-button" sx={{ p:5 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            to="/plants"
          >
            <Typography color="dimgrey">
              Plant Guides
            </Typography>
          </Link>
          <Typography color="text.primary">{plant.commonName}</Typography>
        </Breadcrumbs>
      </Box>

      <Container sx={{ p:2 }} className='plantGuide'>
        <Box div className='plant-guide-header'>
          <Typography component="h1" variant="h2" color="primary">
            {plant.commonName}
          </Typography>
          <Typography component="h2" variant="h5" color="secondary" sx={{ fontStyle: 'italic' }}>
            ({plant.scientificName})
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
                  <ReactMarkdown>{plant.description}</ReactMarkdown>
                </Typography>
                <Typography component="h3" variant="h5" color="grey">
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
        </Box>
      </Container>
    </Container>
  );
};

export default Plant;
