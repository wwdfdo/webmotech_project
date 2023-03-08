import React from 'react';
import { useSelector } from 'react-redux';

import Header from '@components/Header';
import LoginForm from '@components/LoginForm';
import RegisterForm from '@components/RegisterForm';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <LoginForm />
      <RegisterForm />
      {children}
    </div>
  );
};

export default Layout;
