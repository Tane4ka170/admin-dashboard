import {
  HeaderCell,
  ImageCell,
  SubHeaderCell,
} from 'components/Dashboard/RecentCustomersTable/RecentCustomersTable.styled';
import {
  OrdersTableStyled,
  PaginationWrapper,
  TableContainer,
} from 'components/Orders/OrdersOverview/OrdersOverview.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  removeProduct,
} from '../../../redux/pharmacy/pharmacyOperations';
import { selectProducts } from 'redux/pharmacy/pharmacySelectors';
import { ActionButtonWrapper, BtnChange } from './ProductInventory.styled';
import sprite from '../../../assets/sprite.svg';
import noImg from '../../../assets/noImg.jpg';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { ModalWrapper } from 'components/Modal/ModalWrapper';
import { EditProductModal } from 'components/Modal/EditProductModal/EditProductModal';

export const ProductInventory = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const productList = useSelector(selectProducts);

  const totalPagesCount = Math.ceil(productList.total / 5);

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

  const showEditModal = product => {
    setModalVisible(true);
    setCurrentProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const hideModal = () => {
    setModalVisible(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage }));
  }, [dispatch, currentPage]);

  return (
    <>
      <TableContainer>
        <OrdersTableStyled>
          <thead>
            <tr>
              <HeaderCell colSpan="6">All Products</HeaderCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <SubHeaderCell>Product Info</SubHeaderCell>
              <SubHeaderCell>Category</SubHeaderCell>
              <SubHeaderCell>Stock</SubHeaderCell>
              <SubHeaderCell>Suppliers</SubHeaderCell>
              <SubHeaderCell>Price</SubHeaderCell>
              <SubHeaderCell>Actions</SubHeaderCell>
            </tr>
            {productList.result?.map(product => (
              <tr key={product._id}>
                <ImageCell>
                  <img src={product.image || noImg} alt="product" />
                  <span>{product.name}</span>
                </ImageCell>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{product.suppliers}</td>
                <td>{product.price}</td>
                <td>
                  <ActionButtonWrapper>
                    <button
                      data-tip="Click to edit"
                      data-for="editTooltip"
                      onClick={() => showEditModal(product)}
                    >
                      <BtnChange>
                        <svg>
                          <use href={`${sprite}#icon-edit`} />
                        </svg>
                      </BtnChange>
                    </button>
                    <ReactTooltip id="editTooltip" place="top" effect="solid" />

                    <button
                      data-tip="You`re about to delete an item!"
                      data-for="deleteTooltip"
                      onClick={() => dispatch(removeProduct(product._id))}
                    >
                      <BtnChange>
                        <svg>
                          <use href={`${sprite}#icon-trash`} />
                        </svg>
                      </BtnChange>
                    </button>
                    <ReactTooltip
                      id="deleteTooltip"
                      place="top"
                      effect="solid"
                    />
                  </ActionButtonWrapper>
                </td>
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
      {isModalVisible && (
        <ModalWrapper isOpen={isModalVisible} onRequestClose={hideModal}>
          <EditProductModal
            onRequestClose={hideModal}
            product={currentProduct}
          />
        </ModalWrapper>
      )}
    </>
  );
};
