import axios from "axios";
import { VALIDATE_TOKEN_URL, LOGIN_USER_URL, LOGOUT_USER_URL, REGISTER_USER_URL, PLANTS_INDEX_URL, USERS_INDEX_URL } from "../constants/ApiRoutes";

const API_BASE_URL = 'http://localhost:5001';
axios.defaults.withCredentials = true;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

const validateToken = async () => {
  try {
    const response = await apiClient.get(VALIDATE_TOKEN_URL);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

const loginUser = async (loginData) => {
  try {
    const response = await apiClient.post(LOGIN_USER_URL, loginData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

const logoutUser = async () => {
  try {
    const response = await apiClient.get(LOGOUT_USER_URL);
    return response.data;
  } catch (err) {
    throw err;
  }
};

const registerUser = async (userData) => {
  try {
    const response = await apiClient.post(REGISTER_USER_URL, userData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

const getPlants = async () => {
  try {
    const response = await apiClient.get(PLANTS_INDEX_URL);
    return response.data.plants;
  } catch (err) {
    throw err;
  }
};

const createPlant = async (newPlant) => {
  try {
    const response = await apiClient.post(PLANTS_INDEX_URL, { plant: newPlant });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const getPlantById = async (id) => {
  try {
    const response = await apiClient.get(`${PLANTS_INDEX_URL}/${id}`);
    return response.data.plant;
  } catch (err) {
    throw err;
  }
};

const getUsers = async () => {
  try {
    const response = await apiClient.get(USERS_INDEX_URL);
    return response.data.users;
  } catch (err) {
    throw err;
  }
};

const getUserById = async (id) => {
  try {
    const response = await apiClient.get(`${USERS_INDEX_URL}/${id}`);
    return response.data.user;
  } catch (err) {
    throw err;
  }
};

export {
  validateToken,
  loginUser,
  logoutUser,
  registerUser,
  getPlants,
  createPlant,
  getPlantById,
  getUsers,
  getUserById,
};
