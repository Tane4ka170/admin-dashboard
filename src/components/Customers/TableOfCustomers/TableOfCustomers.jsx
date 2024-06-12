import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noImg from '../../../assets/noImg.jpg';
import { selectCustomers } from '../../../redux/pharmacy/pharmacySelectors';
import { fetchCustomers } from '../../../redux/pharmacy/pharmacyOperations';
import {
  OrdersTableStyled,
  PaginationWrapper,
  TableContainer,
} from 'components/Orders/OrdersOverview/OrdersOverview.styled';
import {
  HeaderCell,
  ImageCell,
  SubHeaderCell,
} from 'components/Dashboard/RecentCustomersTable/RecentCustomersTable.styled';
import { formatDate } from 'helpers/formatDate';

export const TableOfCustomers = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const customers = useSelector(selectCustomers);

  const totalPages = Math.ceil(customers.total / 5);

  const toBack = () => (page === 1 ? undefined : setPage(page - 1));
  const toForward = () => (page === totalPages ? undefined : setPage(page + 1));

  useEffect(() => {
    dispatch(fetchCustomers({ page }));
  }, [dispatch, page]);

  return (
    <>
      <TableContainer>
        <OrdersTableStyled>
          <thead>
            <tr>
              <HeaderCell colSpan="6">Customers Data</HeaderCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <SubHeaderCell>User Info</SubHeaderCell>
              <SubHeaderCell>Email</SubHeaderCell>
              <SubHeaderCell>Address</SubHeaderCell>
              <SubHeaderCell>Phone</SubHeaderCell>
              <SubHeaderCell>Register date</SubHeaderCell>
            </tr>
            {customers.result?.map(item => (
              <tr key={item._id}>
                <ImageCell>
                  <img src={item.image ? item.image : noImg} alt="user" />
                  <span>{item.name}</span>
                </ImageCell>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>{formatDate(item.register_date)}</td>
              </tr>
            ))}
          </tbody>
        </OrdersTableStyled>
      </TableContainer>
      <PaginationWrapper>
        <button
          type="button"
          onClick={toBack}
          disabled={page === 1 ? true : false}
        >
          🔼
        </button>
        <p>
          <span>{page}</span> / {totalPages}
        </p>
        <button
          type="button"
          onClick={toForward}
          disabled={page === totalPages ? true : false}
        >
          🔽
        </button>
      </PaginationWrapper>
    </>
  );
};
