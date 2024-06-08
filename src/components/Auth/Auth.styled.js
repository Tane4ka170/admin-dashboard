import styled from 'styled-components';
import { theme } from '../../theme';
import traces from '../../assets/traces.png';
import { NavLink } from 'react-router-dom';

export const FormContainer = styled.div`
  @media (width > 1439px) {
    display: flex;
    gap: ${theme.spacing(75)};
  }
`;

export const LogoContainer = styled.div`
  margin-block: ${theme.spacing(12)} ${theme.spacing(74)};
  display: flex;
  align-items: center;
  gap: ${theme.spacing(7)};
  @media (width > 767px) {
    margin-block-end: ${theme.spacing(102)};
  }
  @media (width > 1439px) {
    margin-block: ${theme.spacing(14)} ${theme.spacing(113)};
  }
  img {
    inline-size: 44px;
    block-size: 44px;
  }
  span {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
  }
`;

export const FormTitle = styled.div`
  margin-block-end: ${theme.spacing(20)};
  position: relative;
  @media (width > 767px) {
    margin-block-end: ${theme.spacing(25)};
  }
  h1 {
    max-width: 335px;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.214;
    @media (width > 767px) {
      max-width: 614px;
      font-size: 54px;
      line-height: 1.111;
    }
  }
  img {
    position: absolute;
    top: -55px;
    left: 214px;
    inline-size: 95px;
    block-size: 93px;
    @media (width > 767px) {
      top: -110px;
      left: 410px;
      inline-size: 179px;
      block-size: 175px;
    }
  }
  span {
    color: ${theme.colors.primary};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  @media (width > 767px) {
    max-inline-size: 323px;
  }
`;

export const FormInputWrapper = styled.div`
  position: relative;
  p {
    position: absolute;
    top: 46px;
    margin-inline-start: ${theme.spacing(10)};
    color: ${theme.colors.accent};
    font-size: 10px;
  }

  &[id='password'] {
    margin-block: ${theme.spacing(7)} ${theme.spacing(20)};
  }
`;

export const StyledInput = styled.input`
  position: relative;
  padding: ${theme.spacing(6.5)} ${theme.spacing(9)};
  inline-size: 100%;
  border: 1px solid #1d1e2119;
  border-radius: ${theme.radii.xxl};
  background: ${theme.colors.light};
  outline: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &::placeholder {
    color: ${theme.colors.alfadarkblue};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  top: 13px;
  right: 18px;
  border: none;
  background: none;
`;

export const BackgroundImage = styled.div`
  background: no-repeat url(${traces});
  position: absolute;
  left: 117px;
  right: 0;
  top: 705px;
  bottom: -300px;
  @media (width > 767px) {
    top: 770px;
    left: 495px;
    bottom: -490px;
  }
  @media (width > 1439px) {
    top: 540px;
    left: 1120px;
    bottom: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  margin-block-start: ${theme.spacing(10)};
  font-size: 12px;
  align-self: center;
  text-decoration: underline;
  transition: text-decoration ${theme.transition}, color ${theme.transition};

  &:is(:hover, :focus) {
    text-decoration: none;
    color: ${theme.colors.primary};
  }
`;
