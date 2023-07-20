import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { drawerWidth } from '../constants/UiValues';
import { styled } from '@mui/material/styles';
import Container    from '@mui/material/Container';
import Community    from './pages/Community/Community';
import Events       from './pages/Events/Events';
import Home         from './pages/Home/Home';
import PlantInfo    from './pages/PlantInfo/PlantInfo';
import PlantList    from './pages/PlantList/PlantList';
import Plant        from './pages/PlantList/Plant';
import Profile      from './pages/Profile/Profile';
import DrawerHeader from './ui/DrawerHeader';
import Footer       from './ui/Footer';
import Login        from './ui/Login';
import PrivateRoute from './ui/PrivateRoute';
import Register     from './ui/Register';

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
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Main open={drawerOpen} theme={theme} sx={{ padding: 0 }}>
      <DrawerHeader />
      <Container maxWidth="100%" disableGutters >
        <Routes>
          {/* Unprotected routes */}
          <Route path="/"           element={<Home />} />
          <Route path="/login"      element={isAuthenticated ? <Home /> : <Login />} />
          <Route path="/register"   element={isAuthenticated ? <Home /> : <Register />} />
          <Route path="/basics"     element={<PlantInfo />} />
          <Route path="/plants"     element={<PlantList />} />

          {/* Protected routes */}
          <Route path="/plants/:id" element={<PrivateRoute />} >
            <Route index element={<Plant />} />
          </Route>
          <Route path="/events"     element={<PrivateRoute />} >
            <Route index element={<Events />} />
          </Route>
          <Route path="/community"  element={<PrivateRoute />} >
            <Route index element={<Community />} />
          </Route>
          <Route path="/profile" element={<PrivateRoute />} >
            <Route index element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </Container>
    </Main>
  );
}

export default MainComponent;
