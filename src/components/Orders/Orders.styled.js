import styled from 'styled-components';
import { theme } from '../../theme';

export const FormWrapper = styled.form`
  margin-block-start: ${theme.spacing(20)};
  display: flex;
  gap: ${theme.spacing(4)};
  @media (width > 1439px) {
    margin-inline-start: ${theme.spacing(40)};
  }
`;

export const InputField = styled.input`
  position: relative;
  padding: 13px 18px;
  inline-size: 100%;
  border: 1px solid ${theme.colors.alfablue};
  border-radius: ${theme.radii.xxl};
  background: ${theme.colors.light};
  outline: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  @media (width > 767px) {
    max-inline-size: 224px;
  }

  &::placeholder {
    color: ${theme.colors.alfadarkblue};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
`;
