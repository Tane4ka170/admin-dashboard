import styled from 'styled-components';
import { theme } from '../../theme';
import { DatePicker } from 'antd';

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

export const DatePickerStyled = styled(DatePicker)`
  cursor: pointer;
  position: relative;
  padding: ${theme.spacing(5.5)} ${theme.spacing(7)};
  inline-size: 100%;
  border: 1px solid ${theme.colors.alfablue};
  border-radius: ${theme.radii.xxl};
  background: ${theme.colors.light};
  outline: none;

  input {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.colors.main};
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: ${theme.colors.alfadarkblue};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }

  @media (width > 767px) {
    inline-size: 224px;
  }

  svg {
    inline-size: 16px;
    block-size: 16px;
    fill: ${theme.colors.primary};
  }
`;
