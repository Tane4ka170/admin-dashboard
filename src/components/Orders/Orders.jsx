import PageContainer from 'components/SharedComponents/PageContainer/PageContainer';
import Sidebar from 'components/Sidebar/Sidebar';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchOrders } from '../../redux/pharmacy/pharmacyOperations';
import { FormWrapper, InputField } from './Orders.styled';
import Button from 'components/SharedComponents/Button/Button';
import { OrdersOverview } from './OrdersTable/OrdersOverview';

export const Orders = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const dispatch = useDispatch();
  const isWideScreen = window.innerWidth > 1439;

  const { reset, register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const handleFormSubmit = data => {
    dispatch(fetchOrders(data));
    reset();
    setIsFilterActive(prev => !prev);
  };

  const handleInputFocus = () => {
    setIsFilterActive(false);
  };

  return (
    <PageContainer>
      {isWideScreen && <Sidebar />}
      <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField
          {...register('name', { autoComplete: 'off' })}
          placeholder="User Name"
          onFocus={handleInputFocus}
        />
        <Button
          icon={!isFilterActive}
          prop={isFilterActive ? 'Reset' : 'Filter'}
          $variant={isFilterActive ? 'add-sup' : 'filter'}
        />
      </FormWrapper>
      <OrdersOverview />
    </PageContainer>
  );
};
