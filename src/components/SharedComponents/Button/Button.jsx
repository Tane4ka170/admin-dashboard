import React from 'react';
import sprite from '../../../assets/sprite.svg';
import { CustomButton } from './Button.styled';

const Button = ({ handleClick, $variant, prop, icon }) => {
  return (
    <CustomButton onClick={handleClick} $variant={$variant} type="submit">
      {prop}
      {icon && (
        <svg width="14" height="14">
          <use href={`${sprite}#icon-filter`} />
        </svg>
      )}
    </CustomButton>
  );
};
export default Button;
