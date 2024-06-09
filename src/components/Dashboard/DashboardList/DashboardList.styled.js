import styled from 'styled-components';
import { theme } from '../../../theme';

export const ItemList = styled.ul`
  margin-block-start: ${theme.spacing(10)};
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(10)};
  @media (width > 1439px) {
    margin-inline-start: ${theme.spacing(40)};
  }
  li {
    padding: ${theme.spacing(7)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    inline-size: 157px;
    block-size: 98px;

    cursor: pointer;
    border: 1px solid ${theme.colors.alfablue};
    border-radius: ${theme.radii.l};
    background-color: ${theme.colors.light};
    transition: border-color ${theme.transition};

    @media (width > 767px) {
      padding: ${theme.spacing(7)} ${theme.spacing(9)};
      inline-size: 221px;
      block-size: 108px;
    }
    @media (width > 1439px) {
      inline-size: 240px;
      block-size: 108px;
    }

    &:is(:hover, :focus, .active) {
      border-color: ${theme.colors.primary};
    }
  }

  li svg {
    inline-size: 18px;
    block-size: 18px;
    stroke: ${theme.colors.main};
    fill: none;
    @media (width > 767px) {
      inline-size: 20px;
      block-size: 20px;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(4)};
`;

export const Heading = styled.h2`
  color: ${theme.colors.alfadarkblue};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.166;
`;

export const Count = styled.p`
  font-weight: 600;
  line-height: 1.25;
  @media (width > 767px) {
    font-size: 24px;
    line-height: 1.333;
  }
`;
