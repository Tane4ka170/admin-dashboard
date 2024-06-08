import styled from 'styled-components';
import { theme } from '../../../theme';

export const Wrapper = styled.div`
  inline-size: 375px;
  padding-inline: ${theme.spacing(10)};

  @media (width > 767px) {
    inline-size: 768px;
    padding-inline: ${theme.spacing(16)};
  }

  @media (width > 1439px) {
    inline-size: 1440px;
    padding-inline: ${theme.spacing(20)};
  }
`;
