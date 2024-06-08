import { theme } from '../../theme';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: ${theme.spacing(8.5)} ${theme.spacing(10)};
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1d1e2119;

  @media (min-width: 768px) {
    padding: ${theme.spacing(7.5)} ${theme.spacing(18)};
  }

  @media (min-width: 1440px) {
    padding: ${theme.spacing(7.5)} ${theme.spacing(20)} ${theme.spacing(7.5)}
      ${theme.spacing(10)};
  }
`;

export const MenuButton = styled.button`
  margin-inline-end: ${theme.spacing(10)};
  z-index: 5;
  svg {
    inline-size: 32px;
    block-size: 32px;
    stroke: ${theme.colors.main};
  }
  @media (width > 1439px) {
    display: none;
  }
`;

export const Logo = styled.img`
  margin-inline-end: ${theme.spacing(10)};
  inline-size: 32px;
  block-size: 32px;
  @media (width > 767px) {
    margin-inline-end: ${theme.spacing(16)};
    inline-size: 40px;
    block-size: 40px;
  }
  @media (width > 1439px) {
    margin-inline-end: ${theme.spacing(30)};
  }
`;

export const PageTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.166;
`;

export const PageSubtitle = styled.h3`
  color: ${theme.colors.alfadarkblue};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const LogoutButton = styled.button`
  margin-inline-start: auto;
  background-color: ${theme.colors.primary};
  border-radius: ${theme.radii.xl};
  inline-size: 44px;
  block-size: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color ${theme.transition};

  @media (width < 1440px) {
    display: none;
  }

  &:is(:hover, :focus) {
    background-color: ${theme.colors.primaryhover};
  }

  svg {
    inline-size: 16px;
    block-size: 16px;
  }
`;
