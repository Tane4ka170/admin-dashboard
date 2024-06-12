import { FormWrapper, InputField } from 'components/Orders/Orders.styled';
import Button from 'components/SharedComponents/Button/Button';
import PageContainer from 'components/SharedComponents/PageContainer/PageContainer';
import Sidebar from 'components/Sidebar/Sidebar';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchCustomers } from '../../redux/pharmacy/pharmacyOperations';
import { TableOfCustomers } from './TableOfCustomers/TableOfCustomers';

export const Customers = () => {
  const [changeButton, setChangeButton] = useState(false);
  const dispatch = useDispatch();

  const screenWidth = window.innerWidth;

  const { reset, register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    if (changeButton) {
      setChangeButton(false);
      dispatch(fetchCustomers(data));
      reset();
      return;
    }
    setChangeButton(true);
    dispatch(fetchCustomers(data));
    reset();
  };

  const handleInputClick = () => {
    setChangeButton(false);
  };

  return (
    <PageContainer>
      {screenWidth > 1439 && <Sidebar />}
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <InputField
          {...register('name', { autoComplete: 'off' })}
          placeholder="User Name"
          onClick={handleInputClick}
        />
        <Button
          icon={changeButton ? false : true}
          prop={changeButton ? 'Reset' : 'Filter'}
          $variant={changeButton ? 'add-sup' : 'filter'}
        />
      </FormWrapper>
      <TableOfCustomers />
    </PageContainer>
  );
};
