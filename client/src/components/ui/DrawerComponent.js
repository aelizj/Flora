import { NavLink } from 'react-router-dom';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { drawerWidth, mainColor } from '../../constants/UiValues';
import NavLinks from '../../constants/NavLinks';
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
