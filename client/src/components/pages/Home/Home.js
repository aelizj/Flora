import React from 'react';
import { styled, Container, Typography, Grid, Box, Card, CardMedia  } from '@mui/material';
import tropicalPlantsPic from '../../../assets/images/tropicalPlants.jpg';
import plantRoom from '../../../assets/images/plantRoom.jpg';
import HomePageButtons from './HomePageButtons';

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  textAlign: 'justify',
  color: theme.palette.text.primary,
  height: 300,
  display: 'flex',
  alignItems: 'center',
  boxShadow: 'none'
}));

const Home = ({ isAuthenticated }) => {
  return (
    <Container maxWidth='100%' sx={{ minHeight: '100vh', py: 5,backgroundColor: '#EDF1EA' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h1" sx={{ textAlign: 'right', fontWeight: 'bold' }}>
          Flora
        </Typography>
        <Typography variant="h4" sx={{ p: 1, paddingBottom: 5, textAlign: 'right', fontWeight: 'light' }}>
          A place for plant lovers.
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={6} md={4}>
            <Item>
              <Typography variant="h6" sx={{ p: 3, fontWeight: 'light' }}>
                Flora is a new type of social media site developed for plant lovers, by plant lovers.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item>
              <CardMedia
                component="img"
                alt={'Picture of a plant'}
                image={ tropicalPlantsPic }
              />
            </Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item>
              <CardMedia
                component="img"
                alt={'Picture of a plant'}
                image={ plantRoom }
              />
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <Typography variant="h6" sx={{ p: 3, fontWeight: 'light' }} >
                On Flora you can learn about plants through guides contributed by our members, share your experiences by contributing your own guides, and connect with other plant enthusiasts!
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
      {isAuthenticated ? <></> : <HomePageButtons />}
    </Container>
  );
};

export default Home;
