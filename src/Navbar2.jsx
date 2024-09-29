// Imports
import React, { useState, useEffect } from 'react';
import './styles/navbar2.css';
import logo from './images/logoblack.png';

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDashboard = () => {
    window.location.href = '/dashboard';
};

const handleBot= () => {
  window.location.href = '/bot';
};

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      <div className="hamburger" onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li>
          <button className="nav-button" onClick={handleDashboard}>
            Dashboard
          </button>
        </li>
        <li>
          <a className="nav-button" href="http://localhost:3000/">
            NestBot
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
