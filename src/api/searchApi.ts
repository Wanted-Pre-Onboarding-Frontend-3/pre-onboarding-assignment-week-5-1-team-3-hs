import { axiosInstance } from './axios-instance';

export const searchAPI = {
  getAllSicks: async () => {
    const { data } = await axiosInstance.get('/sick');
    return data;
  },
  searchSickNames: async (keyword: string) => {
    const { data } = await axiosInstance.get('/sick', {
      params: { q: keyword },
    });
    return data;
  },
};
