import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfo } from './redux/auth/authOperations';
import Loader from 'components/Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoute } from 'hocs/AuthRoute';
import { PrivateRoute } from 'hocs/PrivateRoute';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import DashboardPage from 'pages/DashboardPage';
import OrderPage from 'pages/OrderPage';
import ProductsPage from 'pages/ProductsPage';
import SuppliersPage from 'pages/SuppliersPage';
import CustomersPage from 'pages/CustomersPage';
import NotFoundPage from 'pages/NotFoundPage';
import Layout from 'components/Layout/Layout';

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
