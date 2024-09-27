import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css'; // Importing styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">We4Tech Agency</Link>
        </div>

        {/* Animated sliding text */}
      

        {/* Navigation links for desktop */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        {/* Burger menu for mobile */}
        <div className="burger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`line ${isOpen ? 'open' : ''}`}></span>
          <span className={`line ${isOpen ? 'open' : ''}`}></span>
          <span className={`line ${isOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
