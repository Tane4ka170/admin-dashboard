import { FormWrapper, InputField } from 'components/Orders/Orders.styled';
import PageContainer from 'components/SharedComponents/PageContainer/PageContainer';
import Sidebar from 'components/Sidebar/Sidebar';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchProducts } from 'redux/pharmacy/pharmacyOperations';
import { ButtonAdd, FlexWrap, FormContainer } from './ProductManager.styled';
import Button from 'components/SharedComponents/Button/Button';
import sprite from '../../assets/sprite.svg';
import { ProductInventory } from './ProductInventory/ProductInventory';

export const ProductManager = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isFilterActive, setFilterActive] = useState(false);
  const dispatch = useDispatch();

  const screenWidth = window.innerWidth;

  const { reset, register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const handleFormSubmit = data => {
    setFilterActive(!isFilterActive);
    dispatch(fetchProducts(data));
    reset();
  };

  const handleInputFocus = () => {
    setFilterActive(false);
  };

  const showModal = () => {
    setModalVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const hideModal = () => {
    setModalVisible(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <PageContainer>
        {screenWidth > 1439 && <Sidebar />}
        <FormContainer>
          <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
            <InputField
              {...register('name', { autoComplete: 'off' })}
              placeholder="Product Name"
              onFocus={handleInputFocus}
            />
            <Button
              icon={!isFilterActive}
              prop={isFilterActive ? 'Reset' : 'Filter'}
              $variant={isFilterActive ? 'add-sup' : 'filter'}
            />
          </FormWrapper>
          <FlexWrap>
            <ButtonAdd onClick={showModal}>
              <svg>
                <use href={`${sprite}#icon-plus`} />
              </svg>
            </ButtonAdd>
            <span>Add a new product</span>
          </FlexWrap>
        </FormContainer>
        <ProductInventory />
      </PageContainer>
      {/* <ModalWrapper isOpen={isModalVisible} onRequestClose={hideModal}>
        <AddProductModal onRequestClose={hideModal} />
      </ModalWrapper> */}
    </>
  );
};
