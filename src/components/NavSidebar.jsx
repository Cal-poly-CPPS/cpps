import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavSidebar.css'; // Import custom CSS styles

export function NavSidebar({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  // Handle click of the menu button
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu-button" onClick={handleMenuClick}>
        Menu
      </button>
      <div className={`nav-bar ${isOpen ? 'open' : ''}`}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link style={{textDecoration:'none', color:'black'}} to={link.path} onClick={handleMenuClick}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

