import axios from "axios";
import { LOGIN_USER_URL, REGISTER_USER_URL, PLANTS_INDEX_URL } from "../constants/ApiRoutes";

const API_BASE_URL = 'http://localhost:5001';
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

const loginUser = async (loginData) => {
  try {
    const response = await apiClient.post(LOGIN_USER_URL, loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const registerUser = async (userData) => {
  try {
    const response = await apiClient.post(REGISTER_USER_URL, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getPlants = async () => {
  try {
    const response = await apiClient.get(PLANTS_INDEX_URL);
    return response.data.plants;
  } catch (error) {
    throw error;
  }
};

const createPlant = async (newPlant) => {
  try {
    const response = await apiClient.post(PLANTS_INDEX_URL, { plant: newPlant });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getPlantById = async (id) => {
  try {
    const response = await apiClient.get(`${PLANTS_INDEX_URL}/${id}`);
    return response.data.plant;
  } catch (error) {
    throw error;
  }
};

export { loginUser, registerUser, getPlants, createPlant, getPlantById };
