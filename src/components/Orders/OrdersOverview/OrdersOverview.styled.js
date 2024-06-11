import styled from 'styled-components';
import { theme } from '../../../theme';

export const TableContainer = styled.div`
  margin-block: ${theme.spacing(10)} ${theme.spacing(5)};
  max-inline-size: 335px;
  overflow-y: hidden;

  @media (width > 767px) {
    max-inline-size: 704px;
  }

  @media (width > 1439px) {
    margin-inline-start: ${theme.spacing(40)};
    max-inline-size: 100%;
  }
`;

export const OrdersTableStyled = styled.table`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.166;
  white-space: nowrap;
  inline-size: 100%;

  @media (width > 767px) {
    font-size: 16px;
    line-height: 1.125;
  }

  @media (width > 1439px) {
    inline-size: 100%;
  }

  td {
    vertical-align: middle;
    padding-inline: ${theme.spacing(5)};
  }
  tbody {
    background-color: ${theme.colors.light};
  }

  img {
    inline-size: 24px;
    block-size: 24px;
    border-radius: ${theme.radii.xl};
    @media (width > 767px) {
      inline-size: 36px;
      block-size: 36px;
    }
  }
`;

export const PaginationWrapper = styled.div`
  padding-block: ${theme.spacing(10)};
  display: flex;
  justify-content: space-between;

  button {
    transition: 1s;
    &:is(:hover, :focus) {
      scale: 1.1;
    }
  }

  span {
    color: ${theme.colors.primary};
  }
  @media (width > 1439px) {
    margin-inline-start: ${theme.spacing(40)};
  }
`;
