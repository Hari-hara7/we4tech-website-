import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css'; // Importing styles
import { FaCode, FaSearch, FaMobileAlt, FaPalette, FaVideo } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo">
            <Link to="/">We4Tech</Link>
          </div>

          {/* Navigation links for desktop */}
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            {['/', '/services', '/projects', '/about', '/contact'].map((path, index) => (
              <Link 
                key={index} 
                to={path} 
                onClick={closeMenu}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>

          {/* Burger menu for mobile */}
          <div className="burger" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`line ${isOpen ? 'open' : ''}`}></span>
            <span className={`line ${isOpen ? 'open' : ''}`}></span>
            <span className={`line ${isOpen ? 'open' : ''}`}></span>
          </div>
        </div>
      </nav>

      {/* Infinity Slider Section */}
      <div className="infinity-slider">
        <div className="slider-content">
          {[
            { icon: <FaCode />, label: 'Web Development' },
            { icon: <FaSearch />, label: 'SEO' },
            { icon: <FaMobileAlt />, label: 'PWA Development' },
            { icon: <FaPalette />, label: 'UI/UX Design' },
            { icon: <FaVideo />, label: 'Video Editing' }
          ].map((service, index) => (
            <motion.div 
              key={index} 
              className="slide" 
              whileHover={{ scale: 1.1 }}
            >
              {service.icon} <span>{service.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
