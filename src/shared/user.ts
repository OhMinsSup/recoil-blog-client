import { atom } from 'recoil';
import { RECOIL_KEY } from '../lib/contants';

export interface UserData {
  _id: any;
  username: string;
}

export const userState = atom<UserData | null>({
  key: RECOIL_KEY.USER_DATA,
  default: null,
});
