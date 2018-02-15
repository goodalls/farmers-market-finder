import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
      </nav>
      Header
    </header>
  );
};

export default Header;
