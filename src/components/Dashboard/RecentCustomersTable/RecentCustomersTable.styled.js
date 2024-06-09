import styled from 'styled-components';
import { theme } from '../../../theme';

export const Container = styled.div`
  margin-block: ${theme.spacing(10)} ${theme.spacing(40)};
  max-inline-size: 335px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(34)};
  @media (width > 767px) {
    max-inline-size: 704px;
  }
  @media (width > 1439px) {
    align-items: start;
    margin-inline-start: ${theme.spacing(40)};
    max-inline-size: 1280px;
    flex-direction: row;
    gap: ${theme.spacing(10)};
  }
`;

export const TableWrapper = styled.div`
  border-radius: ${theme.radii.s};
  overflow: auto;
  @media (width > 767px) {
    max-block-size: 435px;
  }
  @media (width > 1439px) {
    max-inline-size: 630px;
  }
`;

export const StyledTable = styled.table`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.166;
  white-space: nowrap;
  inline-size: 100%;

  @media (width > 767px) {
    font-size: 16px;
    line-height: 1.125;
  }
  td {
    padding-inline: ${theme.spacing(10)};
  }
  &.first td {
    vertical-align: middle;
    padding-inline: ${theme.spacing(10)};
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

export const HeaderCell = styled.th`
  padding: ${theme.spacing(7)};
  border-radius: ${theme.radii.s} ${theme.radii.s} 0 0;
  background-color: ${theme.colors.tablehead};
  text-align: left;
  font-size: 20px;
  @media (width > 767px) {
    padding: ${theme.spacing(10)};
  }
`;

export const SubHeaderCell = styled.td`
  color: ${theme.colors.alfadarkblue};
  padding: ${theme.spacing(5)} ${theme.spacing(7)};
  @media (width > 767px) {
    padding: ${theme.spacing(10)} ${theme.spacing(14.5)};
  }
`;

export const ImageCell = styled.td`
  padding-inline: ${theme.spacing(7)} ${theme.spacing(5)};
  @media (width > 767px) {
    padding-inline: ${theme.spacing(10)} ${theme.spacing(5)};
    padding-block: ${theme.spacing(5)};
    display: flex;
    align-items: center;
    gap: ${theme.spacing(4)};
  }
`;

export const SecondCol = styled.td`
  @media (width < 768px) {
    max-inline-size: 118px;
  }
  padding: ${theme.spacing(5)};
  white-space: normal;
`;
