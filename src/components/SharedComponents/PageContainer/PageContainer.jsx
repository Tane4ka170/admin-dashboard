import React from 'react';
import { Wrapper } from './PageContainer.styled';

const PageContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageContainer;
