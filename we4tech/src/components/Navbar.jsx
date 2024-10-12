import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css'; // Importing styles
import { FaCode, FaSearch, FaMobileAlt, FaPalette, FaVideo,FaBrain } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>Team</Link>
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

      {/* Infinity Slider Section */}
      <div className="infinity-slider">
        <div className="slider-content">
          <motion.div className="slide" whileHover={{ scale: 1.1 }}>
            <FaCode className="icon" /> <span>Web Development</span>
          </motion.div>
          <motion.div className="slide" whileHover={{ scale: 1.1 }}>
            <FaSearch className="icon" /> <span>SEO</span>
          </motion.div>
          <motion.div className="slide" whileHover={{ scale: 1.1 }}>
            <FaMobileAlt className="icon" /> <span>PWA Development</span>
          </motion.div>
          <motion.div className="slide" whileHover={{ scale: 1.1 }}>
            <FaBrain className="icon" /> <span>Web ML</span>
          </motion.div>
          <motion.div className="slide" whileHover={{ scale: 1.1 }}>
            <FaVideo className="icon" /> <span>Video Editing</span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
