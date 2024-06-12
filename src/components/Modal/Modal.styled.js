import styled from 'styled-components';
import { theme } from '../../theme';

export const ModalContent = styled.div`
  @media (width > 767px) {
    padding-inline: ${theme.spacing(10)};
  }
  h2 {
    margin-block-end: ${theme.spacing(20)};
    align-self: start;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
  }
  input {
    @media (width > 767px) {
      inline-size: 224px;
    }
  }
`;

export const Form = styled.form`
  inline-size: 295px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(7)};
  @media (width > 767px) {
    inline-size: 462px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ButtonContainer = styled.div`
  margin-block-start: ${theme.spacing(13)};
  display: flex;
  align-items: center;
  gap: ${theme.spacing(4)};
  @media (width > 767px) {
    margin-block-end: ${theme.spacing(10)};
  }
`;
