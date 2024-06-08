import styled, { css } from 'styled-components';
import { theme } from '../../../theme';

export const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${theme.radii.xxl};
  font-size: 14px;
  line-height: 1.285;

  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};

  transition: background-color ${theme.transition}, color ${theme.transition};

  &:hover {
    background-color: ${theme.colors.primaryhover};
  }

  ${({ $variant }) =>
    $variant === 'login' &&
    css`
      @media screen and (max-width: 767px) {
        padding: ${theme.spacing(6.5)} ${theme.spacing(73.5)};
      }
      padding: ${theme.spacing(6.5)} ${theme.spacing(70.5)};
    `};

  ${({ $variant }) =>
    $variant === 'filter' &&
    css`
      @media screen and (max-width: 767px) {
        font-size: 12px;
        line-height: 1.5;
      }
      padding: ${theme.spacing(6.5)} ${theme.spacing(15)};
      display: flex;
      flex-direction: row-reverse;
      gap: ${theme.spacing(5)};
    `};
  ${({ $variant }) =>
    $variant === 'add' &&
    css`
      @media screen and (max-width: 767px) {
        padding: ${theme.spacing(6.5)} ${theme.spacing(30.5)};
        font-size: 12px;
        line-height: 1.5;
      }
      padding: ${theme.spacing(6.5)} ${theme.spacing(26)};
    `};
  ${({ $variant }) =>
    $variant === 'cancel' &&
    css`
      @media screen and (max-width: 767px) {
        padding: ${theme.spacing(6)} ${theme.spacing(24.5)};
        font-size: 12px;
        line-height: 1.5;
      }
      padding: ${theme.spacing(6)} ${theme.spacing(21)};
      border: 1px solid transparent;
      background-color: ${theme.colors.alfablue};
      color: ${theme.colors.alfadarkblue};
      &:is(:hover, :focus) {
        border: 1px solid ${theme.colors.primary};
        background-color: transparent;
        color: ${theme.colors.primary};
      }
    `};
  ${({ $variant }) =>
    $variant === 'save' &&
    css`
      @media screen and (max-width: 767px) {
        padding: ${theme.spacing(6.5)} ${theme.spacing(29.5)};
        font-size: 12px;
        line-height: 1.5;
      }
      padding: ${theme.spacing(6.5)} ${theme.spacing(25)};
    `};
  ${({ $variant }) =>
    $variant === 'add-sup' &&
    css`
      @media screen and (max-width: 767px) {
        margin-block-start: ${theme.spacing(8)};
        font-size: 12px;
        line-height: 1.5;
      }
      padding: ${theme.spacing(6.5)} ${theme.spacing(15)};
      border: 1px solid #59b17a7f;
      background-color: transparent;
      color: ${theme.colors.main};
      &:hover {
        border: 1px solid ${theme.colors.primaryhover};
        color: ${theme.colors.light};
      }
    `};
`;
