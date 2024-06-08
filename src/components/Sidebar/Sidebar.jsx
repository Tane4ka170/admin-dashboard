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
import { Tooltip as ReactTooltip } from 'react-tooltip';

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
          <li key={to} data-tip={label} data-for={`tooltip-${icon}`}>
            <NavigationLink to={to}>
              <svg>
                <use href={`${sprite}#${icon}`} />
              </svg>
            </NavigationLink>
            <ReactTooltip id={`tooltip-${icon}`} place="right" effect="solid" />
          </li>
        ))}
      </ul>
      <div
        data-tip="You are about to leave the profile."
        data-for="logoutTooltip"
      >
        <MenuLogoutButton onClick={handleLogout}>
          <svg>
            <use href={`${sprite}#icon-logout`} />
          </svg>
        </MenuLogoutButton>
        <ReactTooltip id="logoutTooltip" place="right" effect="solid" />
      </div>
    </NavigationContainer>
  );
};

export default Sidebar;
