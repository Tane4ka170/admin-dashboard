import styled, { css } from 'styled-components';
import { theme } from '../../../theme';

export const Label = styled.div`
  inline-size: 80px;
  block-size: 23px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({ $variant }) =>
    $variant === 'Expense' &&
    css`
      color: ${theme.colors.accent};
      background-color: #e8505019;
    `};
  ${({ $variant }) =>
    $variant === 'Income' &&
    css`
      color: ${theme.colors.primary};
      background-color: #59b17a19;
    `};
  ${({ $variant }) =>
    $variant === 'Error' &&
    css`
      color: ${theme.colors.main};
      background-color: ${theme.colors.alfablue};
    `};
`;
