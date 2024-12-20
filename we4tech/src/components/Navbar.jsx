import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaTools,
  FaProjectDiagram,
  FaUsers,
  FaEnvelope,
  FaCode,
  FaSearch,
  FaMobileAlt,
  FaBrain,
  FaVideo,
} from 'react-icons/fa';
import './Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          
          <div className="logo">
            <Link to="/">We4Tech</Link>
          </div>

       
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <FaHome className="nav-icon" /> Home
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              <FaTools className="nav-icon" /> Services
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              <FaProjectDiagram className="nav-icon" /> Projects
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <FaUsers className="nav-icon" /> Team
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <FaEnvelope className="nav-icon" /> Contact
            </Link>
          </div>

         
          <div className="burger" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`line ${isOpen ? 'open' : ''}`}></span>
            <span className={`line ${isOpen ? 'open' : ''}`}></span>
            <span className={`line ${isOpen ? 'open' : ''}`}></span>
          </div>
        </div>
      </nav>

     
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
