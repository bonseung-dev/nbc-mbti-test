import axios from "axios";

const JSON_API_URL = "https://impossible-yummy-witness.glitch.me/testResults";

export const getTestResults = async () => {
  const response = await axios.get(JSON_API_URL);
  return response.data;
};

export const createTestResults = async (resultData) => {
  const response = await axios.post(JSON_API_URL, resultData);
  return response.data;
};

export const deleteTestResults = async (id) => {
  const response = await axios.delete(`${JSON_API_URL}/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axios.patch(`${JSON_API_URL}/${id}`, { visibility });
  return response.data;
};
