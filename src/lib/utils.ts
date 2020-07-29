import { STORAGE_KEY } from './contants';
import { UserData } from '../shared/user';

export const saveUserData = (userData: UserData) => {
  const stringObj = JSON.stringify(userData);
  localStorage.setItem(STORAGE_KEY.BLOG_USER_DATA, stringObj);
};
