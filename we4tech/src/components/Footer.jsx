
import './Footer.css'; // Importing styles
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Importing icons
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>We4Tech Agency</h2>
          <p>Providing top-notch web development, graphic design, and digital solutions.</p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            {['Home', 'Services', 'Projects', 'About Us', 'Contact'].map(link => (
              <li key={link}><Link to={`/${link.toLowerCase().replace(' ', '')}`}>{link}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Join Our Newsletter</h3>
          <p>Stay updated with our latest news and offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {[{ icon: FaFacebookF, link: 'https://facebook.com' }, 
              { icon: FaInstagram, link: 'https://instagram.com/we4tech' }, 
              { icon: FaTwitter, link: 'https://twitter.com/we4_tech' }, 
              { icon: FaLinkedinIn, link: 'https://linkedin.com/company/we4tech' }].map(({ icon: Icon, link }) => (
                <a href={link} target="_blank" rel="noopener noreferrer" key={link}>
                  <Icon />
                </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 We4Tech Agency. All Rights Reserved.</p>
        <div className="footer-links">
          {['Privacy Policy', 'Terms & Conditions', 'Contact'].map(link => (
            <Link key={link} to={`/${link.toLowerCase().replace(' ', '')}`}>{link}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
