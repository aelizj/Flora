import axios from 'axios';

export const fetchPlants = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_PLANTS_REQUEST' });

    try {
      const response = await axios.get('/api/plants');
      dispatch({ type: 'FETCH_PLANTS_SUCCESS ', payload: response.data });
    } catch(error) {
      dispatch({ type: 'FETCH_PLANTS_FAILURE', payload: error.message});
    }
  }
};