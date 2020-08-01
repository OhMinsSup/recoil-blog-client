import { atom, selector } from 'recoil';
import { RECOIL_KEY } from '../lib/contants';
import { checkAPI } from '../lib/apis/auth';

export interface UserData {
  _id: any;
  username: string;
}

export const userState = atom<UserData | null>({
  key: RECOIL_KEY.USER_DATA,
  default: null,
});

export const userQuery = selector({
  key: RECOIL_KEY.USER_QUERY,
  get: async () => {
    try {
      const response = await checkAPI();
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
});
