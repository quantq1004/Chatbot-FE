import axios from 'axios';
import camelCase from 'camelcase-keys';
import { isTokenExpired, logout } from '@src/utils/auth';
import { API_URL } from '../configs';

const axiosClient = axios.create({
  baseURL: `${API_URL}/api/v1`,
  responseType: 'json',
  timeout: 15 * 1000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      if (isTokenExpired(token)) {
        logout();
        return Promise.reject(new Error('Token expired'));
      }
      const updatedConfig = { ...config };
      updatedConfig.headers.Authorization = `Bearer ${token}`;
      return updatedConfig;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosClient.interceptors.response.use(
  (response) => camelCase(response.data, { deep: true }),
  (error) => {
    if (error.response && error.response.status === 401) {
      logout();
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
