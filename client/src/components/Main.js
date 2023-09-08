import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { drawerWidth } from '../constants/UiValues';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Community from './pages/Community/Community';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import PlantInfo from './pages/PlantInfo/PlantInfo';
import PlantGuideList from './pages/PlantGuideList/PlantGuideList';
import PlantGuide from './pages/PlantGuideList/PlantGuide';
import Profile from './pages/Profile/Profile';
import DrawerHeader from './ui/DrawerHeader';
import Footer from './ui/Footer';
import Login from './ui/Login';
import Register from './ui/Register';
import {
  HOME_PAGE_URL,
  PLANT_GUIDES_INDEX_URL,
  LOGIN_USER_URL,
  REGISTER_USER_URL,
  PROFILE_PAGE_URL,
  EVENTS_PAGE_URL,
  COMMUNITY_PAGE_URL,
  PLANT_BASICS_URL,
} from '../constants/Routes';

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
      <Container maxWidth="100%" disableGutters sx={{ minHeight: '100vh'}} >
        <Routes>
          {/* Unprotected routes */}
          <Route path={HOME_PAGE_URL}                   element={<Home isAuthenticated={isAuthenticated}/>} />
          <Route path={PLANT_GUIDES_INDEX_URL}          element={<PlantGuideList isAuthenticated={isAuthenticated} />} />
          <Route path={PLANT_BASICS_URL}                element={<PlantInfo />} />

          {/* Protected routes */}
          <Route path={LOGIN_USER_URL}                  element={isAuthenticated ? <Home /> : <Login />} />
          <Route path={REGISTER_USER_URL}               element={isAuthenticated ? <Home /> : <Register />} />
          <Route path={PROFILE_PAGE_URL}                element={isAuthenticated ? <Profile /> : <Login />}  />
          <Route path={EVENTS_PAGE_URL}                 element={isAuthenticated ? <Events /> : <Login />} />
          <Route path={COMMUNITY_PAGE_URL}              element={isAuthenticated ? <Community /> : <Login />}/>
          <Route path={`${PLANT_GUIDES_INDEX_URL}/:id`} element={isAuthenticated ? <PlantGuide /> : <Login />} />
        </Routes>
      </Container>
      <Footer />

    </Main>
  );
};

export default MainComponent;
