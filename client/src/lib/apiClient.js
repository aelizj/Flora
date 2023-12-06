import axios from "axios";
import {
  API_BASE_URL,
  API_VALIDATE_TOKEN_URL,
  API_LOGIN_USER_URL,
  API_LOGOUT_USER_URL,
  API_REGISTER_USER_URL,
  API_PLANT_GUIDES_INDEX_URL,
  API_USERS_INDEX_URL
} from "../constants/Routes";

axios.defaults.withCredentials = true;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

const validateToken = async () => {
  try {
    const response = await apiClient.get(API_VALIDATE_TOKEN_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (data) => {
  try {
    const response = await apiClient.post(API_LOGIN_USER_URL, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logoutUser = async () => {
  try {
    const response = await apiClient.get(API_LOGOUT_USER_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const registerUser = async (data) => {
  try {
    const response = await apiClient.post(API_REGISTER_USER_URL, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  try {
    const response = await apiClient.get(API_USERS_INDEX_URL);
    return response.data.users;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const response = await apiClient.get(`${API_USERS_INDEX_URL}/${id}`);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

const patchUser = async (id, data) => {
  try{
    const response = await apiClient.patch(`${API_USERS_INDEX_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getPlantGuides = async () => {
  try {
    const response = await apiClient.get(API_PLANT_GUIDES_INDEX_URL);
    return response.data.plantGuides;
  } catch (error) {
    throw error;
  }
};

const createPlantGuide = async (data) => {
  try {
    const response = await apiClient.post(API_PLANT_GUIDES_INDEX_URL, { plantGuide: data });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getPlantGuideById = async (id) => {
  try {
    const response = await apiClient.get(`${API_PLANT_GUIDES_INDEX_URL}/${id}`);
    return response.data.plantGuide;
  } catch (error) {
    throw error;
  }
};

const deletePlantGuideById = async (id) => {
  try {
    const response = await apiClient.delete(`${API_PLANT_GUIDES_INDEX_URL}/${id}`);
    return response.data;
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
  deletePlantGuideById,
};
