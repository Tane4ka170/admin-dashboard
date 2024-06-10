import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../../redux/pharmacy/pharmacyOperations';
import { selectOrders } from '../../../redux/pharmacy/pharmacySelectors';
import {
  OrdersTableStyled,
  PaginationWrapper,
  TableContainer,
} from './OrdersOverview.styled';
import {
  HeaderCell,
  ImageCell,
  SubHeaderCell,
} from 'components/Dashboard/RecentCustomersTable/RecentCustomersTable.styled';
import noImg from '../../../assets/noImg.jpg';
import { formatDate } from '../../../helpers/formatDate';
import { StatusIndicator } from 'components/SharedComponents/StatusIndicator/StatusIndicator';

export const OrdersOverview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  const totalPagesCount = Math.ceil(orders.total / 5);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPagesCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchOrders({ page: currentPage }));
  }, [dispatch, currentPage]);

  return (
    <>
      <TableContainer>
        <OrdersTableStyled>
          <thead>
            <tr>
              <HeaderCell colSpan="6">All Orders</HeaderCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <SubHeaderCell>User Info</SubHeaderCell>
              <SubHeaderCell>Address</SubHeaderCell>
              <SubHeaderCell>Products</SubHeaderCell>
              <SubHeaderCell>Price</SubHeaderCell>
              <SubHeaderCell>Status</SubHeaderCell>
              <SubHeaderCell>Order Date</SubHeaderCell>
            </tr>
            {orders.result?.map(order => (
              <tr key={order._id}>
                <ImageCell>
                  <img src={order.image || noImg} alt="user" />
                  <span>{order.name}</span>
                </ImageCell>
                <td>{order.address}</td>
                <td>{order.products}</td>
                <td>{order.price}</td>
                <td>
                  <StatusIndicator
                    prop={order.status}
                    $variant={order.status}
                  />
                </td>
                <td>{formatDate(order.order_date)}</td>
              </tr>
            ))}
          </tbody>
        </OrdersTableStyled>
      </TableContainer>
      <PaginationWrapper>
        <button
          type="button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          🔼
        </button>
        <p>
          <span>{currentPage}</span> / {totalPagesCount}
        </p>
        <button
          type="button"
          onClick={handleNextPage}
          disabled={currentPage === totalPagesCount}
        >
          🔽
        </button>
      </PaginationWrapper>
    </>
  );
};
