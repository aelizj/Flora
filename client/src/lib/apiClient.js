import axios from "axios";
import { PLANTS_INDEX_URL } from "../constants/ApiRoutes";

const API_BASE_URL = 'http://localhost:5001'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

const getPlants = async () => {
  try {
    const response = await apiClient.get(PLANTS_INDEX_URL);
    return response.data.plants;
  } catch(err) {
    throw(err);
  }
}

const createPlant = async (newPlant) => {
  try {
    const response = await apiClient.post(PLANTS_INDEX_URL, { plant: newPlant });
    return response.data;
  } catch(err) {
    throw(err);
  }
}

export { getPlants, createPlant };
