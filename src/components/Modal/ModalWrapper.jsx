import React from 'react';
import { createPortal } from 'react-dom';
import Modal from 'react-modal';
import sprite from '../../assets/sprite.svg';
import { CloseBtn, ModalHeader } from './ModalWrapper.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '40px 20px',
    transform: 'translate(-50%, -50%)',
    border: '1px solid rgba(104, 104, 104, 0.2)',
    borderRadius: '12px',
    zIndex: '1300',
    overflowY: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(20, 20, 20, .6)',
    zIndex: '10',
  },
};

Modal.setAppElement('#modal');
const modalRoot = document.querySelector('#modal');

export const ModalWrapper = ({ isOpen, onRequestClose, children }) => {
  return createPortal(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <ModalHeader>
        <CloseBtn
          onClick={onRequestClose}
          data-tip="Close"
          data-for="closeTooltip"
        >
          <svg width="24" height="24">
            <use xlinkHref={`${sprite}#icon-close`} />
          </svg>
        </CloseBtn>
      </ModalHeader>
      <div>{children}</div>
    </Modal>,
    modalRoot
  );
};
