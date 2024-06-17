import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { getUserInfo } from './redux/auth/authOperations';
import Loader from './components/Loader/Loader';
import { Layout } from './components/Layout/Layout';
import { AuthRoute } from './hocs/AuthRoute';
import { PrivateRoute } from './hocs/PrivateRoute';

const RegisterPage = lazy(() => import('./pages/RegisterPage'));
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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate replace to="/login" />} />
        <Route
          path="/register"
          element={
            <AuthRoute redirectTo="/dashboard" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <AuthRoute redirectTo="/dashboard" component={<LoginPage />} />
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              redirectTo="/dashboard"
              component={<DashboardPage />}
            />
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute redirectTo="/orders" component={<OrderPage />} />
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute redirectTo="/products" component={<ProductsPage />} />
          }
        />
        <Route
          path="/customers"
          element={
            <PrivateRoute
              redirectTo="/customers"
              component={<CustomersPage />}
            />
          }
        />
        <Route
          path="/suppliers"
          element={
            <PrivateRoute
              redirectTo="/suppliers"
              component={<SuppliersPage />}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
