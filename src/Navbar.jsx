// Imports
import React, { useState, useEffect } from 'react';
import './styles/navbar.css';
import logo from './images/logoblack.png';
import { useRedirectFunctions } from '@propelauth/react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { redirectToLoginPage, redirectToSignupPage } = useRedirectFunctions(); 

  const handleToggle = () => {
    setIsOpen(!isOpen);
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
          {/* Use redirectToLoginPage for Login button */}
          <button className="nav-button" onClick={() => redirectToLoginPage()}>
            Login
          </button>
        </li>
        <li>
          {/* Use redirectToSignupPage for Sign Up button */}
          <button className="nav-button" onClick={() => redirectToSignupPage()}>
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
