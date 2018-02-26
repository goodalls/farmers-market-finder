import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header">
      <Link to={'/'}>
        <h1>
          <span className="farmers">Farmers</span>
          <span className="market">Market</span>
          <span className="finder">Finder</span>
        </h1>
      </Link>
    </header>
  );
};

export default Header;
