import { drawerWidth } from '../../constants/UiValues';
import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Toolbar, Link, Typography, IconButton, MenuItem }  from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import { logoutUser } from '../../store/features/user';
import {
  HOME_PAGE_URL,
  LOGIN_USER_URL,
  PROFILE_PAGE_URL
} from '../../constants/Routes';

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

const FloraAppBar = ({ drawerOpen, handleDrawerOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLoginLogout = (event) => {
    event.preventDefault();
    if (isAuthenticated) {
      dispatch(logoutUser())
    } else {
      navigate(LOGIN_USER_URL);
    }
  }

  const handleProfileHome = (event) => {
    event.preventDefault();
    if (isAuthenticated) {
      navigate(PROFILE_PAGE_URL);
    } else {
      navigate(HOME_PAGE_URL);
    }
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" open={drawerOpen}>
      <Toolbar>
        <IconButton
          size="large"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(drawerOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          <Link href={HOME_PAGE_URL} color='#fff' underline='none'>
            Flora
          </Link>
        </Typography>
        <div id="account-menu">
          <IconButton
            edge="end"
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            sx={{ ml: 2 }}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleProfileHome}>{isAuthenticated ? 'Profile' : 'Home'}</MenuItem>
            <MenuItem onClick={handleLoginLogout}>{isAuthenticated ? 'Logout' : 'Login'}</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default FloraAppBar;
