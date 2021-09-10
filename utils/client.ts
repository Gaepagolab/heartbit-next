import axios, { AxiosInstance } from 'axios';
import socketio from 'socket.io-client';

import { API_SERVER_ENDPOINT, SOCKET_SERVER_ENDPOINT } from './constants';

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_SERVER_ENDPOINT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const socketClient = (path: string) => {
  return socketio(`${SOCKET_SERVER_ENDPOINT}/${path}`);
};
