import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NotFoundContainer,
  NotFoundIcon,
  NotFoundMessage,
  HomeButton,
} from './NotFound.styled';
import { ReactComponent as NotFoundSVG } from '../../assets/not-found.svg';

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <NotFoundContainer>
      <NotFoundIcon>
        <NotFoundSVG />
      </NotFoundIcon>
      <NotFoundMessage>
        Sorry, the page you are looking for does not exist.
      </NotFoundMessage>
      <HomeButton onClick={goToHome}>Go to Home</HomeButton>
    </NotFoundContainer>
  );
};

export default NotFound;
