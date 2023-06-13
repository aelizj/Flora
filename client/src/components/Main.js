import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { drawerWidth } from '../constants/UiValues';
import { styled } from '@mui/material/styles';
import Container    from '@mui/material/Container';
import Community    from './pages/Community/Community';
import DrawerHeader from './ui/DrawerHeader';
import Events       from './pages/Events/Events';
import Footer       from './ui/Footer';
import Home         from './pages/Home/Home';
import PlantInfo    from './pages/PlantInfo/PlantInfo';
import PlantList    from './pages/PlantList/PlantList';
import Plant        from './pages/PlantList/Plant';
import Profile      from './pages/Profile/Profile';

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
  <Main open={drawerOpen} theme={theme} sx={{ padding: 0 }}>
    <DrawerHeader />
    <Container maxWidth="100%" disableGutters >
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/community"  element={<Community />} />
        <Route path="/events"     element={<Events />} />
        <Route path="/basics"     element={<PlantInfo />} />
        <Route path="/plants"     element={<PlantList />} />
        <Route path="/plants/:id" element={<Plant />} />
        <Route path="/profile"    element={<Profile />} />
      </Routes>
      <Footer />
    </Container>
  </Main>
);

export default MainComponent;
