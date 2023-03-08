import React, { useEffect, useCallback, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@redux/slices/auth';
import { closeLoginModel } from '@redux/slices/app';

import InputWithLabel from '@components/InputWithLabel';
import Button from '@components/Button';
import InputError from '@components/InputError';
import { CgClose } from 'react-icons/cg';
import './LoginForm.css';

const LoginSchema = Yup.object().shape({
  username: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loggingIn, setLoggingIn] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const { isLoginModelOpen } = useSelector((state) => state.app);

  const handleClose = useCallback(() => {
    dispatch(closeLoginModel());
  }, [dispatch]);

  useEffect(() => {
    if (user?.token && isLoginModelOpen) {
      handleClose();
      navigate('/dashboard');
    }
  }, [user?.token, isLoginModelOpen, handleClose, navigate]);

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50 login  ${
        isLoginModelOpen ? 'loginOpen' : 'loginClose'
      }`}
    >
      <div className="bg-white w-[600px] relative rounded-lg ">
        <button
          className=" text-3xl absolute top-4 right-4 opacity-50"
          onClick={handleClose}
        >
          <CgClose />
        </button>

        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={({ username, password }) => {
            setError(null);
            setLoggingIn(true);
            dispatch(loginUser({ email: username, password }))
              .unwrap()
              .then((originalPromiseResult) => {
                // user will be navigated to Dashboard
              })
              .catch((rejectedValueOrSerializedError) => {
                console.log(rejectedValueOrSerializedError);
                setLoggingIn(false);
                if (rejectedValueOrSerializedError?.message)
                  setError(rejectedValueOrSerializedError.message);
              });
          }}
          validationSchema={LoginSchema}
        >
          {({ errors, touched }) => (
            <Form className="py-20 px-[25%] flex flex-col gap-3">
              <h2 className="text-center text-4xl font-bold text-primary">
                Login
              </h2>
              <Field
                name="username"
                component={InputWithLabel}
                placeholder="user name"
                type="text"
                label="username"
              />
              {errors.username && touched.username ? (
                <InputError>{errors.username}</InputError>
              ) : null}
              <Field
                name="password"
                component={InputWithLabel}
                placeholder="password"
                type="password"
                label="password"
              />

              {errors.password && touched.password ? (
                <InputError>{errors.password}</InputError>
              ) : null}

              <Button
                fill
                type="submit"
                disabled={Object.keys(errors).length !== 0 || loggingIn}
                className="w-1/3 mx-auto"
              >
                {!loggingIn ? 'Login' : 'Loading...'}
              </Button>
              {error && <p className="text-red-400">{error}</p>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
