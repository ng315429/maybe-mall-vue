import axios from 'axios';
import setInterceptor from './config/interceptor';

const createInstance = () => {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true,
  });
};
const createInstanceWithAuth = () => {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}`,
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
  return setInterceptor(instance);
};
export const instance = createInstance();
export const instanceAuth = createInstanceWithAuth();
