import axios from 'axios';

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
export const authURL = `${baseURL}/auth`;

export const authHttpService = axios.create({
  baseURL: authURL,
  headers: {
    Accept: 'application/json',
  },
});
