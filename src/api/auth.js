import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

export const authlogin = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const authSignup = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const authGetUserProfile = async (token) => {};
