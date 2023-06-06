import { NavLink } from 'react-router-dom';
import React from 'react';
import { drawerWidth, mainColor } from '../../constants/UiValues';
import NavLinks from '../../constants/NavLinks';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DrawerHeader from './DrawerHeader';

const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
  color: 'inherit',
});

const DrawerComponent = ({ drawerOpen, handleDrawerClose, theme, linkIcons }) => (
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
      {NavLinks.map((link, index) => (
        <StyledNavLink to={link.path} key={index}>
          <ListItem key={link.path} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              {React.createElement(linkIcons[index], { style: { color: mainColor } })}
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
);

export default DrawerComponent;
