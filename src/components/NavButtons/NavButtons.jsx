import React from 'react';
import { useDispatch } from 'react-redux';

import { openLoginModel, openRegisrerModel } from '@redux/slices/app';

import Button from '@components/Button';

const NavButtons = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(openLoginModel());
  };

  const handleRegister = () => {
    dispatch(openRegisrerModel());
  };

  return (
    <div className="flex gap-5">
      <Button onClick={handleLogin} className="text-primary">
        Log in
      </Button>
      <Button fill onClick={handleRegister}>
        Get Started
      </Button>
    </div>
  );
};

export default NavButtons;
