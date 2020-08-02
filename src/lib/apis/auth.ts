import apiClient from './apiClient';
import { UserData } from '../../store/user';

export const loginAPI = (username: string, password: string) =>
  apiClient.post<UserData>('/api/auth/login', {
    username,
    password,
  });

export const registerAPI = (username: string, password: string) =>
  apiClient.post<UserData>('/api/auth/register', {
    username,
    password,
  });

export const logoutAPI = () => apiClient.post('/api/auth/logout');

export const checkAPI = () => apiClient.get<UserData>('/api/auth/check');
