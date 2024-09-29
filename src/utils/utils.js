import axios from 'axios';

const api = axios.create({
  baseURL: 'https://journaling-appfe.onrender.com',
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  if (!config.url.includes('/register/')) {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
