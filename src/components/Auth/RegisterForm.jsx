import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import logo from '../../assets/logo_log.png';
import pillImage from '../../assets/pill.png';
import iconSet from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../../redux/auth/authOperations';
import PageContainer from 'components/SharedComponents/PageContainer/PageContainer';
import {
  BackgroundImage,
  FormContainer,
  FormInputWrapper,
  FormTitle,
  LogoContainer,
  StyledForm,
  StyledInput,
  StyledLink,
  TogglePasswordButton,
} from './Auth.styled';
import Button from 'components/SharedComponents/Button/Button';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Wrong email. Try again...')
    .trim()
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Minimum 7 characters')
    .max(20, 'Maximum 20 characters')
    .trim()
    .required('Password is required'),
});

export const RegisterForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmit = async data => {
    try {
      await dispatch(registerUser(data)).unwrap();
      toast.success('Registration successful!');
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <PageContainer>
      <LogoContainer>
        <img src={logo} alt="E-Pharmacy Logo" />
        <span>E-Pharmacy</span>
      </LogoContainer>
      <FormContainer>
        <FormTitle>
          <h1>
            Your medication, delivered. Say goodbye to all{' '}
            <span>your healthcare</span> worries with us
          </h1>
          <img src={pillImage} alt="Pill" />
        </FormTitle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormInputWrapper>
            <StyledInput
              {...register('email')}
              placeholder="Email address"
              style={{ borderColor: errors.email ? '#E85050' : '#59b17a' }}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </FormInputWrapper>
          <FormInputWrapper id="password">
            <StyledInput
              {...register('password')}
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
              style={{ borderColor: errors.password ? '#E85050' : '#59b17a' }}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <TogglePasswordButton
              onClick={togglePasswordVisibility}
              type="button"
            >
              <svg width="18" height="18" stroke="#1D1E21" fill="none">
                <use
                  href={
                    isPasswordVisible
                      ? `${iconSet}#icon-eye`
                      : `${iconSet}#icon-eye-off`
                  }
                />
              </svg>
            </TogglePasswordButton>
          </FormInputWrapper>
          <Button prop="Register" $variant="login">
            Register
          </Button>
          <StyledLink to="/login">
            Already have an account? Login now!
          </StyledLink>
        </StyledForm>
      </FormContainer>
      <BackgroundImage />
    </PageContainer>
  );
};
