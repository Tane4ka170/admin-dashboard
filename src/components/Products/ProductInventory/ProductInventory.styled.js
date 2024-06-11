import styled from 'styled-components';
import { theme } from '../../../theme';

export const BtnChange = styled.button`
  inline-size: 32px;
  block-size: 32px;
  border-radius: ${theme.radii.xl};
  transition: background-color ${theme.transition};

  &:is(:hover, :focus) {
    background-color: #e9eb9fe1;
  }

  svg {
    inline-size: 16px;
    block-size: 16px;
  }
`;

export const ActionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(4)};

  button:first-child {
    border: 1px solid #59b17a7f;
  }
  button:last-child {
    border: 1px solid #e850507f;
  }
`;
