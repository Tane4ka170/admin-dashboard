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

export const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Allow it to take available space */
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
  background-color: ${theme.colors.primary};
  border-radius: ${theme.radii.xl};
  inline-size: 44px;
  block-size: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color ${theme.transition};
  position: relative;
  margin-left: auto; /* Allow it to move to the right automatically */

  @media (width < 1440px) {
    display: none;
  }

  &:is(:hover, :focus) {
    background-color: ${theme.colors.primaryhover};

    + div {
      visibility: visible;
      opacity: 1;
    }
  }

  svg {
    inline-size: 16px;
    block-size: 16px;
  }
`;

export const Tooltip = styled.div`
  visibility: hidden;
  opacity: 0;
  background-color: ${theme.colors.tablehead};
  color: ${theme.colors.main};
  text-align: center;
  border-radius: ${theme.radii.s};
  padding: ${theme.spacing(2)};
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: ${theme.spacing(1)};
  transition: visibility 0s, opacity 0.2s linear;
`;

export const LogoutContainer = styled.div`
  position: relative;
  display: inline-block;
`;
