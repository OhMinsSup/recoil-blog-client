import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const TITLE_MAP = {
  LOGIN: '로그인',
  REGISTER: '회원가입',
};

export enum AuthFormType {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

interface AuthFormProps {
  type: AuthFormType;
  username: string;
  password: string;
  passwordConfirm?: string;
  error: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  type,
  password,
  username,
  passwordConfirm,
  error,
  onChange,
  onSubmit,
}) => {
  const title = TITLE_MAP[type];

  return (
    <AuthFormBlock>
      <h3>{title}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          value={username}
          onChange={onChange}
        />
        <StyledInput
          type="password"
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChange}
        />
        {type === AuthFormType.REGISTER && (
          <StyledInput
            type="password"
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={onChange}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button cyan fullwidth={true}>
          {title}
        </Button>
      </form>
      <Footer>
        {type === AuthFormType.LOGIN ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }

  button {
    margin-top: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: ${palette.cyan[7]};
    border-bottom: 1px solid ${palette.gray[7]};
  }

  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export default AuthForm;
