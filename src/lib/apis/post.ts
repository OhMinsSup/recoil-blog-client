import apiClient from './apiClient';
import qs from 'qs';

export type WritePostParams = {
  title: string;
  body: string;
  tags: string[];
};

export type ListPostParams = {
  page: number;
  username: string;
  tag: string;
};

export type PostPayloadResponse = {
  _id: any;
  title: string;
  body: string;
  tags: string[];
  publishedDate: number;
  user: {
    _id: any;
    username: string;
  };
};

export const writePostAPI = ({ title, body, tags }: WritePostParams) =>
  apiClient.post<PostPayloadResponse>('/api/v1.0/posts', { title, body, tags });

export const readPostAPI = (id: string) =>
  apiClient.get<PostPayloadResponse>(`/api/v1.0/posts/${id}`);

export const listPostsAPI = ({ page, username, tag }: ListPostParams) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });

  return apiClient.get<PostPayloadResponse[]>(`/api/v1.0/posts?${queryString}`);
};
