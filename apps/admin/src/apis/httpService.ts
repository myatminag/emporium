import axios from 'axios';

export const httpService = axios.create({
  baseURL: '/',
  headers: {
    Accept: 'application/json',
  },
});
