import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlantById } from '../../../store/features/plant';

const Plant = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, plant, error } = useSelector(state => state.plant);

  useEffect(() => {
    dispatch(getPlantById(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!plant) return <p>No plant data!</p>

  return (
    <div className='plant'>
      <h6 className='plant-title'>{plant.commonName}</h6>
      <img src={plant.imageUrl} alt={plant.commonName} className='plant-image'/>
      <p className='plant-description'>{plant.description}</p>
      <h4 className='plant-care-guide'>{plant.careGuide}</h4>
    </div>
  );
};

export default Plant;