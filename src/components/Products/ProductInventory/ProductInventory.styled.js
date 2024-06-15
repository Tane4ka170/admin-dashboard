import styled from 'styled-components';
import { theme } from '../../../theme';

export const BtnChange = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color ${theme.transition};
  border: 1px solid transparent; /* Встановити прозорий бордер за замовчуванням */
  background: transparent;

  &:hover,
  &:focus {
    background-color: #e9eb9fe1;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ActionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(4)};
`;

export const EditButton = styled(BtnChange)`
  border-color: #59b17a7f; /* Зелений бордер для кнопки редагування */
`;

export const DeleteButton = styled(BtnChange)`
  border-color: #e850507f; /* Червоний бордер для кнопки видалення */
`;

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipText = styled.span`
  visibility: hidden;
  opacity: 0;
  background-color: ${theme.colors.tablehead};
  color: ${theme.colors.main};
  text-align: center;
  border-radius: ${theme.radii.s};
  padding: ${theme.spacing(2)};
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: ${theme.spacing(1)};
  transition: visibility 0s, opacity 0.2s linear;
  white-space: nowrap;
`;
