import { atom } from 'recoil';
import { RECOIL_KEY } from '../../../lib/contants';

interface BaseFormState {
  username: string;
  password: string;
}

interface RegisterFormState extends BaseFormState {
  passwordConfirm: string;
}

export const LoginFormInitState: BaseFormState = {
  username: '',
  password: '',
};

export const RegisterFormInitState: RegisterFormState = {
  username: '',
  password: '',
  passwordConfirm: '',
};

export const loginFormState = atom({
  key: RECOIL_KEY.AUTH_LOGIN_FORM_KEY,
  default: LoginFormInitState,
});

export const registerFormState = atom({
  key: RECOIL_KEY.AUTH_REGISTER_FROM_KEY,
  default: RegisterFormInitState,
});
