import styled from 'styled-components';
import { theme } from '../../theme';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${theme.colors.secondary};
  padding: ${theme.spacing(5)};
`;

export const NotFoundIcon = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: ${theme.spacing(5)};
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const NotFoundMessage = styled.h1`
  font-size: 24px;
  color: ${theme.colors.main};
  margin-bottom: ${theme.spacing(5)};
`;

export const HomeButton = styled.button`
  padding: ${theme.spacing(5)} ${theme.spacing(10)};
  font-size: 16px;
  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: ${theme.radii.m};
  cursor: pointer;
  transition: background-color ${theme.transition};
  &:hover {
    background-color: ${theme.colors.primaryhover};
  }
`;
