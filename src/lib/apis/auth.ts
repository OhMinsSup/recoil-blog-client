import apiClient from './apiClient';

export type AuthPayloadResponse = {
  _id: any;
  username: string;
};

export const loginAPI = (username: string, password: string) =>
  apiClient.post<AuthPayloadResponse>('/api/v1.0/auth/signin', {
    username,
    password,
  });

export const registerAPI = (username: string, password: string) =>
  apiClient.post<AuthPayloadResponse>('/api/v1.0/auth/signup', {
    username,
    password,
  });

export const checkAPI = () =>
  apiClient.get<AuthPayloadResponse>('/api/v1.0/auth/check');
