import { signOutUser } from '../../redux/auth/authOperations';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import {
  MenuLogoutButton,
  NavigationContainer,
  NavigationLink,
} from './Sidebar.styled';

const Sidebar = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOutUser());
    navigate('/login');
  };

  const menuItems = [
    { to: '/dashboard', icon: 'icon-dashboard', label: 'Dashboard' },
    { to: '/orders', icon: 'icon-orders', label: 'Orders' },
    { to: '/products', icon: 'icon-products', label: 'Products' },
    { to: '/suppliers', icon: 'icon-suppliers', label: 'Suppliers' },
    { to: '/customers', icon: 'icon-customers', label: 'Customers' },
  ];

  return (
    <NavigationContainer>
      <ul onClick={onClose}>
        {menuItems.map(({ to, icon, label }) => (
          <li key={to} className="tooltip-container">
            <NavigationLink to={to}>
              <svg>
                <use href={`${sprite}#${icon}`} />
              </svg>
            </NavigationLink>
            <span className="tooltip-text">{label}</span>
          </li>
        ))}
      </ul>
      <div className="tooltip-container">
        <MenuLogoutButton onClick={handleLogout}>
          <svg>
            <use href={`${sprite}#icon-logout`} />
          </svg>
        </MenuLogoutButton>
        <span className="tooltip-text">Logout</span>
      </div>
    </NavigationContainer>
  );
};

export default Sidebar;
