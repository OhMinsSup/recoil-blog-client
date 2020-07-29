import { atom, selectorFamily } from 'recoil';
import { RECOIL_KEY, STORAGE_KEY } from '../lib/contants';

export interface UserData {
  _id: any;
  username: string;
}

export interface UserState {
  user: UserData | null;
  checkError: any;
}

export const userState = atom<UserState>({
  key: RECOIL_KEY.USER_DATA,
  default: {
    user: null,
    checkError: null,
  },
});

export const getUserInfoQuery = selectorFamily({
  key: RECOIL_KEY.USER_QUERY,
  get: () => async () => {
    try {
      const user = localStorage.getItem(STORAGE_KEY.BLOG_USER_DATA);
      if (!user) return;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
});
