import styled from 'styled-components';

export const BtnOvalChange = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  inline-size: 82px;
  block-size: 34px;
  border-radius: 30px;
  border: 1px solid #59b17a7f;
  transition: background-color 350ms ease;

  &:is(:hover, :focus) {
    background-color: #59b17a7f;
  }

  svg {
    inline-size: 14px;
    block-size: 14px;
  }

  span {
    color: #59b17a;
    line-height: 1.125;
  }
`;
