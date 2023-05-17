import React from 'react';
import '../assets/stylesheets/Plant.css'

const Plant = ({ plant }) => {
  return (
    <div className='plant-card'>
      <h3 className='plant-title'>{plant.commonName}</h3>
      <img src={plant.imageUrl} alt={plant.commonName} className='plant-image'/>
      <p className='plant-description'>{plant.description}</p>
    </div>
  );
};

export default Plant;