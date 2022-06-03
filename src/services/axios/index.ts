import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://leonardofronza-001-site1.dtempurl.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
