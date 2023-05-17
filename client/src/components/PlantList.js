import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants } from '../store/actions/plantsActions';
import Plant from './Plant';

const PlantList = () => {
  const dispatch = useDispatch();
  const { plants, loading, error } = useSelector(state => state.plants);

  useEffect(() => {
    dispatch(fetchPlants());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Plants</h1>
      <div>
        <h2>Plants</h2>
        {plants.map(p => (
          <Plant plant={p}/>
        ))}
      </div>
    </>
  );
};

export default PlantList;