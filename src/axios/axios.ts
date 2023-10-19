import axios, {AxiosError} from 'axios';
import React from 'react';
import config from '../config/config';
export const Axios = axios.create({
  baseURL: config.SERVER_IP,
  headers: {
    'Content-Type': 'application/json',
  },
});

Axios.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    Promise.resolve(error);
  },
);
