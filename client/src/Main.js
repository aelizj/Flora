import { drawerWidth } from './constants/UiValues';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import DrawerHeader from './components/ui/DrawerHeader';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import PlantList from './pages/PlantList/PlantList';
import PlantInfo from './pages/PlantInfo/PlantInfo';
import Community from './pages/Community/Community';
import Events from './pages/Events/Events';
import Footer from './components/ui/Footer';

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
  <Main open={drawerOpen} theme={theme} sx={{ padding: 0 }}  >
    <DrawerHeader />
    <Container maxWidth="100%" disableGutters >
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
