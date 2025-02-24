import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";
// 로그인
export const authlogin = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};
// 회원가입
export const authSignup = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};
// 나의 프로필
export const authGetUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
// 프로필 변경
export const authPatchProfileChange = async (token) => {
  const response = await axios.patch(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
