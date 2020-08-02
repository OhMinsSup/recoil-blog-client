import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

import { registerFormState } from '../../store/auth';
import { userState } from '../../store/user';
import { registerAPI } from '../../lib/apis/auth';
import { saveUserData } from '../../lib/utils';
import useRequest from '../../lib/hooks/useRequest';

import AuthForm, { AuthFormType } from '../../components/auth/AuthForm';

interface LoginFormProps {}
const LoginForm: React.FC<LoginFormProps> = () => {
  const history = useHistory();

  const setUserData = useSetRecoilState(userState);
  const [form, setForm] = useRecoilState(registerFormState);
  const resetRegisterForm = useResetRecoilState(registerFormState);

  const [error, setError] = useState<string | null>(null);
  const [_register, _, userData, userError] = useRequest(registerAPI);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setForm((oldForm) => ({ ...oldForm, [name]: value }));
    },
    [setForm],
  );

  useEffect(() => {
    resetRegisterForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userData) {
      setUserData((oldUserData) => ({
        ...oldUserData,
        ...userData,
      }));
      saveUserData(userData);
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, userData]);

  useEffect(() => {
    if (userError && userError.response?.status === 409) {
      setError('이미 존재하는 계정입니다.');
      return;
    }
  }, [userError, setError]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError(null);
    e.preventDefault();
    const validation = {
      username: (text: string) => {
        if (!/^[a-z0-9-_]{3,16}$/.test(text)) {
          return '아이디는 3~16자의 알파벳,숫자,혹은 - _ 으로 이루어져야 합니다.';
        }
      },
      password: (text: string) => {
        if (!text) {
          return '패스워드를 입력해주세요.';
        }
      },
      passwordConfirm: (password: string, passwordConfirm: string) => {
        if (!passwordConfirm) {
          return '패스워드 확인을 입력해주세요';
        }

        if (password !== passwordConfirm) {
          return '패스워드가 같지 않습니다.';
        }
      },
    };

    const { username, password, passwordConfirm } = form;
    const error =
      validation.username(username) ||
      validation.password(password) ||
      validation.passwordConfirm(password, passwordConfirm) ||
      null;

    if (error) {
      setError(error);
      return;
    }

    try {
      await _register(username, password);
    } catch (e) {
      setError('에러 발생!!');
      throw e;
    }
  };

  return (
    <AuthForm
      type={AuthFormType.REGISTER}
      username={form.username}
      password={form.password}
      passwordConfirm={form.passwordConfirm}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default LoginForm;
