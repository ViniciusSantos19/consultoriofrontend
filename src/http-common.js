/* eslint-disable eol-last */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default api;