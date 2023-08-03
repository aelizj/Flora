import axios from "axios";
import {
  VALIDATE_TOKEN_URL,
  LOGIN_USER_URL,
  LOGOUT_USER_URL,
  REGISTER_USER_URL,
  PLANTS_INDEX_URL,
  USERS_INDEX_URL
} from "../constants/ApiRoutes";

const API_BASE_URL = 'http://localhost:5001';
axios.defaults.withCredentials = true;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

const validateToken = async () => {
  try {
    const response = await apiClient.get(VALIDATE_TOKEN_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (data) => {
  try {
    const response = await apiClient.post(LOGIN_USER_URL, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logoutUser = async () => {
  try {
    const response = await apiClient.get(LOGOUT_USER_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const registerUser = async (data) => {
  try {
    const response = await apiClient.post(REGISTER_USER_URL, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  try {
    const response = await apiClient.get(USERS_INDEX_URL);
    return response.data.users;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const response = await apiClient.get(`${USERS_INDEX_URL}/${id}`);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

const patchUser = async (id, data) => {
  try{
    const response = await apiClient.patch(`${USERS_INDEX_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getPlantGuides = async () => {
  try {
    const response = await apiClient.get(PLANTS_INDEX_URL);
    return response.data.plantGuides;
  } catch (error) {
    throw error;
  }
};

const createPlantGuide = async (newPlantGuide) => {
  try {
    const response = await apiClient.post(PLANTS_INDEX_URL, { plantGuide: newPlantGuide });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getPlantGuideById = async (id) => {
  try {
    const response = await apiClient.get(`${PLANTS_INDEX_URL}/${id}`);
    return response.data.plantGuide;
  } catch (error) {
    throw error;
  }
};

export {
  validateToken,
  loginUser,
  logoutUser,
  registerUser,
  getUsers,
  getUserById,
  patchUser,
  getPlantGuides,
  createPlantGuide,
  getPlantGuideById,
};
