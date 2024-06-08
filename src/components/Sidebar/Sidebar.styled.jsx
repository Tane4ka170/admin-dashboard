import { theme } from '@/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  padding-block: ${theme.spacing(46)} ${theme.spacing(10)};
  padding-inline: ${theme.spacing(10)};

  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  inline-size: 78px;
  block-size: 100%;
  border: 1px solid ${theme.colors.alfablue};
  background-color: ${theme.colors.secondary};

  animation: fade-in 0.8s ease-in-out;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @media (width > 767px) {
    padding-block-start: ${theme.spacing(50)};
    inline-size: 84px;
  }

  @media (width > 1439px) {
    padding-block-start: ${theme.spacing(20)};
    padding-inline: ${theme.spacing(9)};
    inline-size: 80px;
    top: 76px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(7)};
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  inline-size: 38px;
  block-size: 38px;

  cursor: pointer;
  background-color: ${theme.colors.light};
  border-radius: ${theme.radii.xl};
  box-shadow: 0px -1px 7px 0px rgba(71, 71, 71, 0.05);

  @media (width > 767px) {
    inline-size: 44px;
    block-size: 44px;
  }

  &:is(:hover, :focus, .active) svg {
    fill: ${theme.colors.primary};
  }
  svg {
    inline-size: 12px;
    block-size: 12px;
    fill: ${theme.colors.icon};
    transition: fill ${theme.transition};

    @media (width > 767px) {
      inline-size: 16px;
      block-size: 16px;
    }
  }
`;

export const MenuLogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  inline-size: 38px;
  block-size: 38px;

  background-color: ${theme.colors.primary};
  border-radius: ${theme.radii.xl};

  @media (width > 767px) {
    inline-size: 44px;
    block-size: 44px;
  }

  @media (width > 1439px) {
    display: none;
  }

  svg {
    inline-size: 14px;
    block-size: 14px;
    @media (width > 767px) {
      inline-size: 16px;
      block-size: 16px;
    }
  }
`;
