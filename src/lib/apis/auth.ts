import apiClient from './apiClient';
import { UserData } from '../../shared/user';

export const loginAPI = (username: string, password: string) =>
  apiClient.post<UserData>('/api/v1.0/auth/signin', {
    username,
    password,
  });

export const registerAPI = (username: string, password: string) =>
  apiClient.post<UserData>('/api/v1.0/auth/signup', {
    username,
    password,
  });

export const logoutAPI = () => apiClient.post('/api/v1.0/auth/logout');

export const checkAPI = () => apiClient.get<UserData>('/api/v1.0/auth/check');
