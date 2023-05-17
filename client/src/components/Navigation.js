import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <NavLink to='/'         >Home</NavLink>
      <NavLink to='/profile'  >Profile</NavLink>
      <NavLink to='/plants'   >Plant Guides</NavLink>
      <NavLink to='/basics'   >Plant Basics</NavLink>
      <NavLink to='/community'>Community</NavLink>
      <NavLink to='/events'   >Events</NavLink>
    </nav>
  );
};

export default Navigation;