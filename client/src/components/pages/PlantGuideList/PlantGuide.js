import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditPlantGuideDialog from './EditPlantGuideDialog.js';
import DeletePlantGuideDialog from './DeletePlantGuideDialog.js';
import ReactMarkdown from 'react-markdown';
import { useParams, Link } from 'react-router-dom';
import { getPlantGuideById } from '../../../store/features/plantGuide';
import { PLANT_GUIDES_INDEX_URL } from '../../../constants/Routes';
import PlantIcon from '../../../assets/images/PlantIcon.svg';
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
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getPlantGuideById(id));
  }, [dispatch, id]);

  const guideHasDescription = !!(plantGuide.description);
  const guideHasCareGuide = !!(plantGuide.careGuide);
  const guideHasAuthor = !!(plantGuide.author);
  const authorId = plantGuide && plantGuide.author? plantGuide.author.id : null;
  const userId = user && user._id ? user._id : null;
  const userIsAuthor = authorId && userId && authorId === userId;

  let readableDate;
  if (plantGuide.createdAt) {
    const dateObj = new Date(Date.parse(plantGuide?.createdAt));
    readableDate = dateObj.toLocaleString('en-US', {dateStyle: 'short', timeStyle: 'short'});
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!plantGuide) return <p>No plant data!</p>

  return (
    <Container maxWidth="100%" disableGutters sx={{ paddingBottom: 20 }}>
      <Box span className="back-button" sx={{ p:5 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={PLANT_GUIDES_INDEX_URL} >
            <Typography color="dimgrey">
              Plant Guides
            </Typography>
          </Link>
          <Typography color="text.primary">{plantGuide?.commonName}</Typography>
        </Breadcrumbs>
      </Box>

      <Container sx={{ p:2 }} className='plantGuide'>
        <Box div className='plant-guide-header'>
          <Typography component="h1" variant="h2" color="primary">
            {plantGuide?.commonName}
          </Typography>
          <Typography component="h2" variant="body1" color="secondary" sx={{ fontStyle: 'italic' }}>
            {guideHasAuthor ? `by ${plantGuide?.author?.username}` : ''}
          </Typography>
          <Typography component="h2" variant="body1" color="secondary" sx={{ fontStyle: 'italic' }}>
            posted {readableDate ? readableDate : plantGuide?.createdAt}
          </Typography>
        </Box>

        <Box div className='plant-guide-content'>
          <Grid container spacing={6} sx={{ mt: 1 }}>
            <Grid item xs="6">
              <Box className="plant-guide-text">
                <Typography component="h3" variant="h5" color="grey">
                  {guideHasDescription ? 'Description' : ''}
                </Typography>
                <Typography variant="body" color="black">
                  <ReactMarkdown>{guideHasDescription ? plantGuide?.description : ''}</ReactMarkdown>
                </Typography>
                <Typography component="h3" variant="h5" color="grey">
                  {guideHasCareGuide ? `Caring for ${plantGuide?.commonName}` : ''}
                </Typography>
                <Typography variant="body1" color="black">
                  <ReactMarkdown>{guideHasCareGuide ? plantGuide?.careGuide : ''}</ReactMarkdown>
                </Typography>
                <Typography variant="body2" color="black">
                  <ReactMarkdown></ReactMarkdown>
                </Typography>
                {userIsAuthor ? <EditPlantGuideDialog plantGuide={plantGuide}/> : <></> }
                {userIsAuthor ? <DeletePlantGuideDialog plantGuide={plantGuide}/> : <></> }
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box className="plant-guide-image">
                <Card>
                  <CardMedia
                    component="img"
                    alt={'Picture of ' + plantGuide.commonName}
                    sx={{ width: '100%', height: 'auto'}}
                    image={plantGuide.imageUrl ? plantGuide.imageUrl : PlantIcon }
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
