import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <img src="logo192.png" alt="logo" />
        </div>
        <div className="header-center">
          <a href="#home" className="menu-item">Home</a>
          <a href="#shop" className="menu-item">Shop</a>
          <a href="#about" className="menu-item">About Us</a>
          <a href="#contact" className="menu-item">Contact Us</a>
          <a href="pages" className="menu-item">Pages</a>
          <a href="#blogs" className="menu-item">Blogs</a>
        </div>
        <div className="header-right">
          <FontAwesomeIcon icon={faHeart} className="header-icon" />
          <FontAwesomeIcon icon={faSearch} className="header-icon" />
          <FontAwesomeIcon icon={faShoppingCart} className="header-icon" />
          <FontAwesomeIcon
            icon={faUser}
            className="header-icon"
            onClick={() => (window.location.href = '/login')}
          />
        </div>
      </div>
      {/* Horizontal Line */}
      <hr style={{ border: '0.1px solid #000', margin: '10px 0', opacity: '9%' }} />
      
    </div>
  );
}

export default Header;
