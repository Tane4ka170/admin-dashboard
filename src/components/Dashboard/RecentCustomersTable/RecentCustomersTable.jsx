import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboard } from '../../../redux/pharmacy/pharmacyOperations';
import { selectDashboard } from '../../../redux/pharmacy/pharmacySelectors';
import {
  Container,
  HeaderCell,
  ImageCell,
  SecondCol,
  StyledTable,
  SubHeaderCell,
  TableWrapper,
} from './RecentCustomersTable.styled';
import noImg from '../../../assets/noImg.jpg';
import { formatDate } from 'helpers/formatDate';
import { CustomLabel } from 'components/SharedComponents/CustomLabel/CustomLabel';

const RecentCustomersTable = () => {
  const dispatch = useDispatch();
  const { recentCustomers, incomeExpenses } = useSelector(selectDashboard);

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  return (
    <Container>
      <TableWrapper>
        <StyledTable className="first">
          <thead>
            <tr>
              <HeaderCell colSpan="6">Recent Customers</HeaderCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <SubHeaderCell>Name</SubHeaderCell>
              <SubHeaderCell>Email</SubHeaderCell>
              <SubHeaderCell>Spent</SubHeaderCell>
              <SubHeaderCell>Phone</SubHeaderCell>
              <SubHeaderCell>Address</SubHeaderCell>
              <SubHeaderCell>Register Date</SubHeaderCell>
            </tr>
            {recentCustomers?.map(customer => (
              <tr key={customer._id}>
                <ImageCell>
                  <img src={customer.photo || noImg} alt="user" />
                  <span>{customer.name}</span>
                </ImageCell>
                <td>{customer.email}</td>
                <td>{customer.spent}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
                <td>{formatDate(customer.register_date)}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>

      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <HeaderCell colSpan="3">Income/Expenses</HeaderCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <SubHeaderCell colSpan="3">Today</SubHeaderCell>
            </tr>
            {incomeExpenses?.map(item => (
              <tr key={item._id}>
                <ImageCell>
                  <CustomLabel type={item.type} variant={item.type} />
                </ImageCell>
                <SecondCol>{item.name}</SecondCol>
                <td
                  style={{
                    color:
                      item.type === 'Expense'
                        ? '#E85050'
                        : item.type === 'Income'
                        ? '#59B17A'
                        : '#1D1E21',
                    textDecoration:
                      item.type === 'Error' ? 'line-through' : 'none',
                  }}
                >
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </Container>
  );
};

export default RecentCustomersTable;
