import React from 'react';

const Plant = ({ plant }) => {
  return (
    <div className='plant-card'>
      <h6 className='plant-title'>{plant.commonName}</h6>
      <img src={plant.imageUrl} alt={plant.commonName} className='plant-image'/>
      <p className='plant-description'>{plant.description}</p>
      <h4 className='plant-care-guide'>{plant.careGuide}</h4>
    </div>
  );
};

export default Plant;