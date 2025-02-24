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

export const deleteTestResults = async () => {};

export const updateTestResultVisibility = async () => {};
