import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [activeNav, setActiveNav] = useState('HOME');

  const navItems = ['HOME', 'ABOUT', 'SERVICES', 'PACKAGES', 'OUR TEAM', 'CAREERS', 'CONTACT'];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-circle">
              <span className="logo-text">EKS</span>
            </div>
          </div>
          <div className="logo-content">
            <h1 className="company-name">eks construction</h1>
            <p className="company-tagline">Feel the happiness in your Home</p>
          </div>
        </div>
        
        <nav className="navbar">
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-item ${activeNav === item ? 'active' : ''}`}
              onClick={() => setActiveNav(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;