import { drawerWidth } from '../constants/UiValues';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import DrawerHeader from './DrawerHeader';
import Home from './Home';
import Profile from './Profile';
import PlantList from './PlantList';
import PlantInfo from './PlantInfo';
import Community from './Community';
import Events from './Events';
import Footer from './Footer';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const MainComponent = ({ drawerOpen, theme }) => (
  <Main open={drawerOpen} theme={theme}>
    <DrawerHeader />
    <Container maxWidth="xl">
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/profile"   element={<Profile />} />
        <Route path="/plants"    element={<PlantList />} />
        <Route path="/basics"    element={<PlantInfo />} />
        <Route path="/community" element={<Community />} />
        <Route path="/events"    element={<Events />} />
      </Routes>
      <Footer />
    </Container>
  </Main>
);

export default MainComponent;
