import { isPending } from '@reduxjs/toolkit';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Home|</NavLink>
      <NavLink to="/profile" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Profile|</NavLink>
      <NavLink exact to="/community" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Community|</NavLink>
      <NavLink to="/plants" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Plants</NavLink>
    </nav>
  );
};

export default Navigation;