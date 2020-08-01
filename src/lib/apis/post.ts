import apiClient from './apiClient';
import qs from 'qs';
import { PostData } from '../../shared/post';

export type WritePostParams = {
  title: string;
  body: string;
  tags: string[];
};

export type UpdatePostParams = {
  id: string;
  title: string;
  body: string;
  tags: string[];
};

export type ListPostParams = {
  page: number;
  username?: string;
  tag?: string;
};

export const writePostAPI = ({ title, body, tags }: WritePostParams) =>
  apiClient.post<PostData>('/api/posts', { title, body, tags });

export const readPostAPI = (id: string) =>
  apiClient.get<PostData>(`/api/posts/${id}`);

export const listPostsAPI = ({ page, username, tag }: ListPostParams) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });

  return apiClient.get<PostData[]>(`/api/posts?${queryString}`);
};

export const removePostAPI = (id: string) =>
  apiClient.delete(`/api/posts/${id}`);

export const updatePostAPI = ({ id, title, body, tags }: UpdatePostParams) =>
  apiClient.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });
