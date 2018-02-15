import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id='header'>
      <h1>
        <span className="farmers">Farmers</span> 
        <span className="market">Market</span>
        <span className="finder">Finder</span>
      </h1>
    </header>
  );
};

export default Header;
