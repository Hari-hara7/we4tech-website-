import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaMobileAlt, FaPaintBrush, FaVideo, FaCheck } from 'react-icons/fa';
import { useEffect } from 'react';
import './Home.css'; // Importing styles

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//code.tidio.co/qnqhv178gomielhckx7xnojtikcpyjbk.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1>We4Tech Agency</h1>
          <p>Innovating digital solutions with cutting-edge web development, SEO, graphic design, video editing, and UI/UX design.</p>
          <Link to="/services" className="btn">Explore Services</Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services-section parallax">
        <motion.h2 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          Our Expertise
        </motion.h2>
        <div className="services-grid">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="service-card"
          >
            <FaRocket className="service-icon" />
            <h3>Web Development</h3>
            <p>We create responsive, fast, and modern websites, ensuring a smooth user experience and PWA capabilities.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="service-card"
          >
            <FaMobileAlt className="service-icon" />
            <h3>PWA & SEO</h3>
            <p>Optimize your web presence with Progressive Web Apps and powerful SEO strategies for better visibility.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="service-card"
          >
            <FaPaintBrush className="service-icon" />
            <h3>Graphic Design</h3>
            <p>Stand out with stunning, creative visuals that align with your brand identity.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="service-card"
          >
            <FaVideo className="service-icon" />
            <h3>Video Editing</h3>
            <p>High-quality video production and editing services that help tell your story in a captivating way.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Why Choose We4Tech Agency?
        </motion.h2>
        <div className="reasons-grid">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="reason-card"
          >
            <FaCheck className="reason-icon" />
            <h3>Innovative Solutions</h3>
            <p>We bring innovation and cutting-edge technology to all of our services.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="reason-card"
          >
            <FaCheck className="reason-icon" />
            <h3>Client Satisfaction</h3>
            <p>Our clients' success is our priority, and we strive to exceed their expectations.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="reason-card"
          >
            <FaCheck className="reason-icon" />
            <h3>End-to-End Services</h3>
            <p>We provide a comprehensive range of services to meet your business needs.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="reason-card"
          >
            <FaCheck className="reason-icon" />
            <h3>Expert Team</h3>
            <p>Our team consists of experts in web development, SEO, UI/UX design, and video production.</p>
          </motion.div>
        </div>
      </section>

      {/* Parallax Background Section */}
      <section className="parallax-section">
        <div className="parallax-content">
          <h2>We Drive Innovation in Every Project</h2>
          <p>Your vision, our expertise – bringing your ideas to life with modern web solutions.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          className="cta-content"
        >
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>Get in touch with We4Tech Agency today and let us help you achieve your business goals.</p>
          <Link to="/contact" className="btn">Contact Us</Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
