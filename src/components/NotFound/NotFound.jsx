import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  NotFoundContainer,
  NotFoundIcon,
  NotFoundMessage,
  HomeButton,
} from './NotFound.styled';
import { ReactComponent as NotFoundSVG } from '../../assets/not-found.svg';

const NotFound = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push('/');
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
