import styled, { css } from 'styled-components';
import { theme } from '../../../theme';

export const Indicator = styled.div`
  inline-size: 92px;
  block-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({ $variant }) =>
    $variant === 'Completed' &&
    css`
      color: ${theme.colors.primary};
      background: #59b17a19;
    `};
  ${({ $variant }) =>
    $variant === 'Confirmed' &&
    css`
      color: ${theme.colors.confirmed};
      background: #8059e419;
    `};
  ${({ $variant }) =>
    $variant === 'Pending' &&
    css`
      color: ${theme.colors.pending};
      background: #f7904219;
    `};
  ${({ $variant }) =>
    $variant === 'Cancelled' &&
    css`
      color: ${theme.colors.accent};
      background: #e8505019;
    `};
  ${({ $variant }) =>
    $variant === 'Processing' &&
    css`
      color: ${theme.colors.processing};
      background: #70a6e819;
    `};
  ${({ $variant }) =>
    $variant === 'Shipped' &&
    css`
      color: #00ffff;
      background: #70e8e218;
    `};
  ${({ $variant }) =>
    $variant === 'Delivered' &&
    css`
      color: #ffff00;
      background: #e8d27017;
    `};
  ${({ $variant }) =>
    $variant === 'active' ||
    ($variant === 'Active' &&
      css`
        inline-size: 89px;
        color: ${theme.colors.primary};
        background: #59b17a19;
      `)};
  ${({ $variant }) =>
    $variant === 'deactive' ||
    ($variant === 'Deactive' &&
      css`
        inline-size: 89px;
        color: ${theme.colors.accent};
        background: #e8505019;
      `)};
`;
