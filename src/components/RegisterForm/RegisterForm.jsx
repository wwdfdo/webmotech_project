import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '@redux/slices/auth';
import { closeRegisrerModel } from '@redux/slices/app';

import InputWithLabel from '@components/InputWithLabel';
import Button from '@components/Button';
import InputError from '@components/InputError';

import { CgClose } from 'react-icons/cg';

import './RegisterForm.css';

const registerSchema = Yup.object().shape({
  first_name: Yup.string().min(3).required('First Name is Required'),
  last_name: Yup.string().min(3).required('Last Name us Required'),
  username: Yup.string().email('Invalid email').required('Username Required'),
  password: Yup.string().required('Password is Required'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is Required'),
});

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const [registering, setRegistering] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { isRegisrerModelOpen } = useSelector((state) => state.app);

  const handleClose = () => {
    dispatch(closeRegisrerModel());
  };

  const disbleRegister = (errors, touched) => {
    const allFieldsTouched =
      touched['first_name'] &&
      touched['last_name'] &&
      touched['username'] &&
      touched['password'] &&
      touched['password_confirmation'];

    console.log(Object.keys(errors).length, error, allFieldsTouched);

    return (
      Object.keys(errors).length !== 0 ||
      error ||
      !Boolean(allFieldsTouched) ||
      registering
    );
  };

  useEffect(() => {
    if (user?.token) {
      handleClose();
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50 mt-20 register ${
        isRegisrerModelOpen ? ' registerOpen' : 'registerClose'
      }`}
    >
      <div className="bg-white w-[600px] relative rounded-lg">
        <button
          className=" text-3xl absolute top-4 right-4 opacity-50"
          onClick={handleClose}
        >
          <CgClose />
        </button>

        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            password_confirmation: '',
          }}
          onSubmit={({ username, ...rest }) => {
            setRegistering(true);
            dispatch(registerUser({ email: username, ...rest }))
              .unwrap()
              .then((originalPromiseResult) => {
                // user will be navigated to Dashboard
              })
              .catch((rejectedValueOrSerializedError) => {
                setRegistering(false);
                if (rejectedValueOrSerializedError?.message)
                  setError(rejectedValueOrSerializedError.message);
              });
          }}
          validationSchema={registerSchema}
        >
          {({ errors, touched }) => (
            <Form className="py-10 px-[25%] flex flex-col gap-2">
              <h2 className="text-center text-4xl font-bold text-primary">
                Register
              </h2>
              <Field
                name="first_name"
                component={InputWithLabel}
                placeholder="First name"
                type="text"
                label="First Name"
              />
              {console.log({ touched, errors })}
              {errors.first_name && touched.first_name ? (
                <InputError>{errors.first_name}</InputError>
              ) : null}
              <Field
                name="last_name"
                component={InputWithLabel}
                placeholder="Last name"
                type="text"
                label="Last Name"
              />
              {errors.last_name && touched.last_name ? (
                <InputError>{errors.last_name}</InputError>
              ) : null}
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
              <Field
                name="password_confirmation"
                component={InputWithLabel}
                placeholder="confirm password"
                type="password"
                label="Confirm Password"
              />

              {errors.password_confirmation && touched.password_confirmation ? (
                <InputError>{errors.password_confirmation}</InputError>
              ) : null}

              <Button
                fill
                type="submit"
                disabled={disbleRegister(errors, touched)}
                className="mx-auto"
              >
                {registering ? 'Registering' : 'Register'}
              </Button>
              {error && <p className="text-red-400">{error}</p>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
