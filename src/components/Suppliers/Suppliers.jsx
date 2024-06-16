import { AddNewSuppliers } from 'components/Modal/AddNewSuppliers/AddNewSuppliers';
import { ModalWrapper } from 'components/Modal/ModalWrapper';
import { FormWrapper, InputField } from 'components/Orders/Orders.styled';
import { FormContainer } from 'components/Products/ProductManager.styled';
import Button from 'components/SharedComponents/Button/Button';
import PageContainer from 'components/SharedComponents/PageContainer/PageContainer';
import Sidebar from 'components/Sidebar/Sidebar';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchSuppliers } from '../../redux/pharmacy/pharmacyOperations';
import { TableOfSuppliers } from './TableOfSuppliers/TableOfSuppliers';

export const Suppliers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [changeButton, setChangeButton] = useState(false);
  const dispatch = useDispatch();

  const screenWidth = window.innerWidth;

  const { reset, register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    if (changeButton) {
      setChangeButton(false);
      dispatch(fetchSuppliers(data));
      reset();
      return;
    }
    setChangeButton(true);
    dispatch(fetchSuppliers(data));
    reset();
  };

  const handleInputClick = () => {
    setChangeButton(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <PageContainer>
        {screenWidth > 1439 && <Sidebar />}
        <FormContainer>
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
              handleClick={() => {}}
            />
          </FormWrapper>
          <Button
            prop="Add a new suppliers"
            $variant="add-sup"
            handleClick={() => {
              openModal();
            }}
          />
        </FormContainer>
        <TableOfSuppliers />
      </PageContainer>
      <ModalWrapper isOpen={isModalOpen} onRequestClose={closeModal}>
        <AddNewSuppliers onRequestClose={closeModal} />
      </ModalWrapper>
    </>
  );
};
