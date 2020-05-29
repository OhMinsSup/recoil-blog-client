import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import AuthForm, { AuthFormType } from '../../components/auth/AuthForm';
import { loginFormState, LoginFormInitState } from './atoms';
import useRequest from '../../lib/hooks/useRequest';
import { loginAPI } from '../../lib/apis/auth';

interface LoginFormProps {}
const LoginForm: React.FC<LoginFormProps> = () => {
  const history = useHistory();
  const [form, setForm] = useRecoilState(loginFormState);
  const [error, setError] = useState<null | string>(null);
  const [_login, _, userData, userError] = useRequest(loginAPI);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setForm((oldForm) => ({ ...oldForm, [name]: value }));
    },
    [setForm],
  );

  const initializeForm = useCallback(() => {
    setForm((oldForm) => ({ ...oldForm, ...LoginFormInitState }));
  }, [setForm]);

  useEffect(() => {
    initializeForm();
  }, [initializeForm]);

  useEffect(() => {
    if (userData) {
      history.push('/');
    }
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
    };

    const { username, password } = form;
    const error =
      validation.username(username) || validation.password(password) || null;

    if (error) {
      setError(error);
      return;
    }

    try {
      await _login(username, password);
    } catch (e) {
      setError('에러 발생!!');
      throw e;
    }
  };

  return (
    <AuthForm
      type={AuthFormType.LOGIN}
      username={form.username}
      password={form.password}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
