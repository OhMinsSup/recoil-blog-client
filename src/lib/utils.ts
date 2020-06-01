import { AuthPayloadResponse } from './apis/auth';
import { STORAGE_KEY } from './contants';

export const saveUserData = (userData: AuthPayloadResponse) => {
  const stringObj = JSON.stringify(userData);
  localStorage.setItem(STORAGE_KEY.BLOG_USER_DATA, stringObj);
};
