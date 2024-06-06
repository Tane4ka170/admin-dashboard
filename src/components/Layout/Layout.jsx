import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Loader } from './Loader';
import { Container } from './Layout.styled';
import Header from '../Header/Header';

const pathsWithHeader = [
  '/dashboard',
  '/orders',
  '/products',
  '/customers',
  '/suppliers',
];

export const Layout = () => {
  const location = useLocation();
  const showHeader = pathsWithHeader.includes(location.pathname);

  return (
    <Container>
      {showHeader && <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
