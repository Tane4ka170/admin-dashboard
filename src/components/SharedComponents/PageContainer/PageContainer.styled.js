import styled from 'styled-components';
import { theme } from '../../../theme';

export const Wrapper = styled.div`
  inline-size: 100%;
  max-inline-size: 375px;
  padding-inline: ${theme.spacing(10)};
  margin: 0 auto;

  @media (min-width: 768px) {
    max-inline-size: 768px;
    padding-inline: ${theme.spacing(16)};
  }

  @media (min-width: 1440px) {
    max-inline-size: 1440px;
    padding-inline: ${theme.spacing(20)};
  }
`;
