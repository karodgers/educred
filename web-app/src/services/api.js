// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Your Go API server

const submitCertificate = async (certificate) => {
  const response = await axios.post(`${API_URL}/certificates`, certificate);
  return response.data;
};

const getCertificates = async () => {
  const response = await axios.get(`${API_URL}/certificates`);
  return response.data;
};

export default {
  submitCertificate,
  getCertificates,
};
