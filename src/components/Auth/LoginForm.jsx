import { yupResolver } from '@hookform/resolvers/yup';
import PageContainer from 'components/SharedComponents/PageContainer/PageContainer';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authenticateUser } from '../../redux/auth/authOperations';
import * as yup from 'yup';
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
import logo from '../../assets/logo_log.png';
import pill from '../../assets/pill.png';
import sprite from '../../assets/sprite.svg';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Wrong email. Try again...')
    .trim()
    .required('Email is a required field'),
  password: yup
    .string()
    .min(7, 'Minimum 7 characters')
    .max(20, 'Maximum 20 characters')
    .trim()
    .required('Password is a required field'),
});

export const LoginForm = () => {
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
      await dispatch(authenticateUser(data)).unwrap();
      toast.success('Welcome back!');
      reset();
    } catch (error) {
      console.error(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevVisibility => !prevVisibility);
  };

  return (
    <PageContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
        <span>E-Pharmacy</span>
      </LogoContainer>
      <FormContainer>
        <FormTitle>
          <h1>
            Your medication, delivered. Say goodbye to all{' '}
            <span>your healthcare</span> worries with us.
          </h1>
          <img src={pill} alt="pill" />
        </FormTitle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormInputWrapper>
            <StyledInput
              {...register('email', { autoComplete: 'off' })}
              placeholder="Email address"
              style={{ borderColor: errors.email ? '#E85050' : '#59b17a' }}
            />
            <p>{errors.email?.message}</p>
          </FormInputWrapper>
          <FormInputWrapper id="password">
            <StyledInput
              {...register('password', { autoComplete: 'off' })}
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
              style={{ borderColor: errors.password ? '#E85050' : '#59b17a' }}
            />
            <p>{errors.password?.message}</p>
            <TogglePasswordButton
              onClick={togglePasswordVisibility}
              type="button"
            >
              <svg width="18" height="18" stroke="#1D1E21" fill="none">
                <use
                  href={
                    isPasswordVisible
                      ? `${sprite}#icon-eye`
                      : `${sprite}#icon-eye-off`
                  }
                />
              </svg>
            </TogglePasswordButton>
          </FormInputWrapper>
          <Button prop="Log in" $variant="login" />
          <StyledLink to="/register">First time? Sign up</StyledLink>
        </StyledForm>
      </FormContainer>
      <BackgroundImage />
    </PageContainer>
  );
};
