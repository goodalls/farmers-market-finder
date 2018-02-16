import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header">
      <NavLink to={'/'}>
        <h1>
          <span className="farmers">Farmers</span>
          <span className="market">Market</span>
          <span className="finder">Finder</span>
        </h1>
      </NavLink>
    </header>
  );
};

export default Header;
