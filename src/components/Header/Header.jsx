import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  HeaderContainer,
  Logo,
  LogoutButton,
  MenuButton,
  PageSubtitle,
  PageTitle,
} from './Header.styled';
import { useAuth } from '@/hooks/useAuth';
import { signOutUser } from '@/redux/auth/authOperations';
import logo from '../../assets/logo.png';
import sprite from '../../assets/sprite.svg';
import Sidebar from '../Sidebar/Sidebar';

const pageTitleMap = {
  '/dashboard': 'Dashboard',
  '/orders': 'All orders',
  '/products': 'All products',
  '/suppliers': 'All suppliers',
  '/customers': 'All customers',
};

const getPageTitle = location => {
  const { pathname } = location;
  return pageTitleMap[pathname] || 'Unknown page';
};

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(signOutUser());
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    document.body.style.overflowY = menuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflowY = 'auto';
  };

  const pageTitle = getPageTitle(location);

  return (
    <HeaderContainer>
      <MenuButton onClick={toggleMenu}>
        <svg>
          <use href={`${sprite}#icon-${menuOpen ? 'close' : 'menu'}`} />
        </svg>
      </MenuButton>
      {menuOpen && <Sidebar onClose={closeMenu} />}

      <NavLink to="/">
        <Logo src={logo} alt="logo" />
      </NavLink>
      <div>
        <PageTitle>Medicine Store</PageTitle>
        <PageSubtitle>
          {pageTitle} | {user.email}
        </PageSubtitle>
      </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <LogoutButton type="button" onClick={handleLogout}>
          <svg>
            <use href={`${sprite}#icon-logout`} />
          </svg>
        </LogoutButton>
        <div
          style={{
            display: 'none',
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#fff',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '4px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            zIndex: 1000,
          }}
        >
          Leaving already?
        </div>
      </div>
    </HeaderContainer>
  );
};
