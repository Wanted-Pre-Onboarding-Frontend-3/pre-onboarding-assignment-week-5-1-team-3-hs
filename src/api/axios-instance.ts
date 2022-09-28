import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  paramsSerializer(params) {
    return new URLSearchParams(params).toString();
  },
});

axiosInstance.interceptors.request.use((config: any) => {
  console.info('calling api');
  return config;
});
