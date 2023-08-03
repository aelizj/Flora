import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { drawerWidth } from '../constants/UiValues';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Community      from './pages/Community/Community';
import Events         from './pages/Events/Events';
import Home           from './pages/Home/Home';
import PlantInfo      from './pages/PlantInfo/PlantInfo';
import PlantGuideList from './pages/PlantGuideList/PlantGuideList';
import PlantGuide     from './pages/PlantGuideList/PlantGuide';
import Profile        from './pages/Profile/Profile';
import DrawerHeader   from './ui/DrawerHeader';
import Footer         from './ui/Footer';
import Login          from './ui/Login';
import Register       from './ui/Register';

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

const MainComponent = ({ drawerOpen, theme }) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
    <Main open={drawerOpen} theme={theme} sx={{ padding: 0 }}>
      <DrawerHeader />
      <Container maxWidth="100%" disableGutters >
        <Routes>
          {/* Unprotected routes */}
          <Route path="/"                 element={<Home />} />
          <Route path="/basics"           element={<PlantInfo />} />
          <Route path="/plant-guides"     element={<PlantGuideList />} />

          {/* Protected routes */}
          <Route path="/login"            element={isAuthenticated ? <Home /> : <Login />} />
          <Route path="/register"         element={isAuthenticated ? <Home /> : <Register />} />
          <Route path="/events"           element={isAuthenticated ? <Events /> : <Login />} />
          <Route path="/community"        element={isAuthenticated ? <Community /> : <Login />}/>
          <Route path="/profile"          element={isAuthenticated ? <Profile /> : <Login />}  />
          <Route path="/plant-guides/:id" element={isAuthenticated ? <PlantGuide /> : <Login />} />
        </Routes>
        <Footer />
      </Container>
    </Main>
  );
};

export default MainComponent;
