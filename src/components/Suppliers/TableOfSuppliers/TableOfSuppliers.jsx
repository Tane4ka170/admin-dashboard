import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { format } from 'date-fns';
import sprite from '../../../assets/sprite.svg';
import { selectSuppliers } from '../../../redux/pharmacy/pharmacySelectors';
import { fetchSuppliers } from '../../../redux/pharmacy/pharmacyOperations';
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
import { StatusIndicator } from 'components/SharedComponents/StatusIndicator/StatusIndicator';
import { BtnOvalChange } from './TableOfSuppliers.styled';
import { ModalWrapper } from 'components/Modal/ModalWrapper';
import { EditSuppliers } from 'components/Modal/EditSuppliers/EditSuppliers';

export const TableOfSuppliers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const suppliers = useSelector(selectSuppliers);

  const totalPages = Math.ceil(suppliers.total / 5);

  const toBack = () => (page === 1 ? undefined : setPage(page - 1));
  const toForward = () => (page === totalPages ? undefined : setPage(page + 1));

  const openModal = item => {
    setIsModalOpen(true);
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    dispatch(fetchSuppliers({ page }));
  }, [dispatch, page]);

  return (
    <>
      <TableContainer>
        <OrdersTableStyled>
          <thead>
            <tr>
              <HeaderCell colSpan="7">All suppliers</HeaderCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <SubHeaderCell>Suppliers Info</SubHeaderCell>
              <SubHeaderCell>Address</SubHeaderCell>
              <SubHeaderCell>Company</SubHeaderCell>
              <SubHeaderCell>Delivery date</SubHeaderCell>
              <SubHeaderCell>Ammount</SubHeaderCell>
              <SubHeaderCell>Status</SubHeaderCell>
              <SubHeaderCell>Action</SubHeaderCell>
            </tr>
            {suppliers.result?.map(item => (
              <tr key={item._id}>
                <ImageCell>
                  <span>{item.name}</span>
                </ImageCell>
                <td>{item.address}</td>
                <td>{item.suppliers}</td>
                <td>{format(new Date(item.date), 'MMMM d, yyyy')}</td>
                <td>{item.amount}</td>
                <td>
                  <StatusIndicator
                    prop={capitalizeFirstLetter(item.status)}
                    $variant={capitalizeFirstLetter(item.status)}
                  />
                </td>
                <td>
                  <ReactTooltip content="Click to edit" trigger="hover">
                    <BtnOvalChange onClick={() => openModal(item)}>
                      <svg>
                        <use href={`${sprite}#icon-edit`} />
                      </svg>
                      <span>Edit</span>
                    </BtnOvalChange>
                  </ReactTooltip>
                </td>
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
      {isModalOpen && (
        <ModalWrapper isOpen={isModalOpen} onRequestClose={closeModal}>
          <EditSuppliers onRequestClose={closeModal} item={selectedItem} />
        </ModalWrapper>
      )}
    </>
  );
};
