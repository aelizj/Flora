import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import FloraAppBar from './AppBar';
import DrawerComponent from './DrawerComponent';
import MainComponent from './Main';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

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
        }}
      >
        <CssBaseline />
        <FloraAppBar drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen} />
        <DrawerComponent drawerOpen={drawerOpen} handleDrawerClose={handleDrawerClose} theme={theme} linkIcons={linkIcons} />
        <MainComponent drawerOpen={drawerOpen} theme={theme} />
      </Box>
    </Router>
  );
};

export default App;
