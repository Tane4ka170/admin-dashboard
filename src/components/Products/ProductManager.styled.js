import styled from 'styled-components';
import { theme } from '../../theme';

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  inline-size: 42px;
  block-size: 42px;
  border-radius: ${theme.radii.xl};
  background-color: ${theme.colors.primary};
  transition: background-color ${theme.transition};

  &:is(:hover, :focus) {
    background-color: ${theme.colors.primaryhover};
  }

  svg {
    inline-size: 30px;
    block-size: 30px;
    fill: ${theme.colors.light};
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (width > 767px) {
    align-items: end;
    justify-content: space-between;
  }
`;

export const FlexWrap = styled.div`
  margin-block-start: ${theme.spacing(9)};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing(4)};
  span {
    font-size: 14px;
    line-height: 1.285;
  }
`;
