import React from 'react';
import './Header.css';

function Header({ selectedMenu, onMenuChange }) {
  const menuItems = ['Home', 'Product', 'About Us', 'Contact'];

  return (
    <header className="header">
      <div className="logo">CHUHAZNG</div>
      <nav className="menu">
        {menuItems.map(item => (
          <div
            key={item}
            className={`menu-item ${selectedMenu === item ? 'active' : ''}`}
            onClick={() => onMenuChange(item)}
          >
            {item}
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Header;
