import axios from "axios";

const API_BASE_URL = 'https://localhost:5001';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

const getPlants = async () => {
  try {
    const response = await apiClient.get('/plants');
    return response.data;
  } catch(err) {
    throw err;
  }
}

const createPlant = async (newPlant) => {
  try {
    const response = await apiClient.post('/plants', { plant: newPlant });
    return response.data;
  } catch(err) {
    throw(err);
  }
}

export { getPlants, createPlant };

