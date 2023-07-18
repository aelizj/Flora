import axios from "axios";
import { VALIDATE_TOKEN_URL, LOGIN_USER_URL, REGISTER_USER_URL, PLANTS_INDEX_URL } from "../constants/ApiRoutes";

const API_BASE_URL = 'http://localhost:5001';
axios.defaults.withCredentials = true;
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

const validateToken = async () => {
  console.log('inside client validateToken function')

  try {
    const response = await apiClient.get(VALIDATE_TOKEN_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (loginData) => {
  console.log('inside client loginUser function')

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
  console.log('inside client getPlants function')

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
  console.log('inside client getPlantById function')
  try {
    const response = await apiClient.get(`${PLANTS_INDEX_URL}/${id}`);
    return response.data.plant;
  } catch (error) {
    throw error;
  }
};

export { validateToken, loginUser, registerUser, getPlants, createPlant, getPlantById };
