import { theme } from '../../theme';
import styled from 'styled-components';

export const ModalHeader = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 10;
  padding: 0;
  background: transparent;

  & svg {
    stroke: ${theme.colors.main};
    transition: stroke ${theme.transition};

    &:is(:hover, :focus) {
      stroke: ${theme.colors.primary};
    }
  }
`;
