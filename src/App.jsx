import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { getUserInfo } from './redux/auth/authOperations';
import Loader from './components/Loader/Loader';
import { Layout } from './components/Layout/Layout';
import { AuthRoute } from './hocs/AuthRoute';
import { PrivateRoute } from './hocs/PrivateRoute';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const CustomersPage = lazy(() => import('./pages/CustomersPage'));
const SuppliersPage = lazy(() => import('./pages/SuppliersPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/login" />} />
          <Route
            path="/login"
            element={
              <AuthRoute redirectTo="/dashboard" component={<LoginPage />} />
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
            }
          />
          <Route
            path="/orders"
            element={
              <PrivateRoute redirectTo="/login" component={<OrderPage />} />
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute redirectTo="/login" component={<ProductsPage />} />
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRoute redirectTo="/login" component={<CustomersPage />} />
            }
          />
          <Route
            path="/suppliers"
            element={
              <PrivateRoute redirectTo="/login" component={<SuppliersPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
