import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboard } from '../../../redux/pharmacy/pharmacyOperations';
import { selectDashboard } from '../../../redux/pharmacy/pharmacySelectors';
import { Count, Heading, IconWrapper, ItemList } from './DashboardList.styled';
import sprite from '../../../assets/sprite.svg';

const DashboardList = () => {
  const dispatch = useDispatch();
  const { productsCount, suppliersCount, customersCount } =
    useSelector(selectDashboard);

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  return (
    <ItemList>
      <li>
        <IconWrapper>
          <svg>
            <use href={`${sprite}#icon-db`} />
          </svg>
          <Heading>All Products</Heading>
        </IconWrapper>
        <Count>{productsCount}</Count>
      </li>
      <li>
        <IconWrapper>
          <svg>
            <use href={`${sprite}#icon-db`} />
          </svg>
          <Heading>All Suppliers</Heading>
        </IconWrapper>
        <Count>{suppliersCount}</Count>
      </li>
      <li>
        <IconWrapper>
          <svg>
            <use href={`${sprite}#icon-users`} />
          </svg>
          <Heading>All Customers</Heading>
        </IconWrapper>
        <Count>{customersCount}</Count>
      </li>
    </ItemList>
  );
};

export default DashboardList;
