import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Main       from './Main';
import DrawerHeader from './DrawerHeader';
import SideDrawer from './SideDrawer';
import Community  from './Community';
import Events     from './Events';
import Footer     from './Footer';
import Header     from './Header';
import Home       from './Home';
import Navigation from './Navigation';
import PlantInfo  from './PlantInfo';
import PlantList  from './PlantList'
import Profile    from './Profile';
import { Box, Container, CssBaseline } from '@mui/material';

const App = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <SideDrawer open={open} theme={theme} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
        <Main open={open} theme={theme}>
          <DrawerHeader />
          <Header />
          <Navigation />
          <Container maxWidth="xl">
            <Routes>
              <Route path="/"          element={<Home />} />
              <Route path="/profile"   element={<Profile />} />
              <Route path="/plants"    element={<PlantList />} />
              <Route path="/basics"    element={<PlantInfo />} />
              <Route path="/community" element={<Community />} />
              <Route path="/events"    element={<Events />} />
            </Routes>
          </Container>
          <Footer />
        </Main>
      </Box>
    </Router>
  );
}

export default App;
