import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

//constants
import { drawerWidth } from '../constants/UiValues';
import links from '../constants/links';

//react components
import Community  from './Community';
import Events     from './Events';
import Footer     from './Footer';
import Home       from './Home';
import PlantInfo  from './PlantInfo';
import PlantList  from './PlantList'
import Profile    from './Profile';

// mui elements
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

// icons
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

//* NEEDS SERIOUS REFACTORING

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const App = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const linkIcons = [
    HomeRoundedIcon,
    AccountCircleRoundedIcon,
    TipsAndUpdatesRoundedIcon,
    InfoRoundedIcon,
    PeopleRoundedIcon,
    CalendarMonthRoundedIcon
  ];

  const StyledNavLink = styled(NavLink)({
    textDecoration: 'none',
    color: 'inherit',
  });

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          WebkitFontSmoothing: 'antialiased', // For Safari and Chrome
          MozOsxFontSmoothing: 'grayscale',   // For Firefox on macOS
          fontSmoothing: 'antialiased',       // For other browsers
        }}>
        <CssBaseline />
        <AppBar position="fixed" open={drawerOpen}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(drawerOpen && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" noWrap component="div">
              Flora
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={drawerOpen}
          >
          <DrawerHeader theme={theme}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <List>
            {links.map((link, index) => (
              <StyledNavLink to={link.path} key={index}>
                <ListItem key={link.path} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {React.createElement(linkIcons[index])}
                    </ListItemIcon>
                    <ListItemText primary={
                      <Typography variant="drawerLink" color="primary">
                        {link.name}
                      </Typography>} />
                  </ListItemButton>
                </ListItem>
              </StyledNavLink>
            ))}
          </List>
        </Drawer>

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
      </Box>
    </Router>
  );
}

export default App;
