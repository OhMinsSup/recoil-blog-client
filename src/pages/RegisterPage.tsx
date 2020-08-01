import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => (
  <AuthTemplate>
    <RegisterForm />
  </AuthTemplate>
);

export default RegisterPage;
