import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaMobileAlt, FaPaintBrush, FaVideo, FaCheck, FaBrain } from 'react-icons/fa';
import { useEffect } from 'react';
import './Home.css'; 

const Home = () => {
  useEffect(() => {
   
    const tidioScript = document.createElement('script');
    tidioScript.src = "//code.tidio.co/qnqhv178gomielhckx7xnojtikcpyjbk.js";
    tidioScript.async = true;
    document.body.appendChild(tidioScript);

    
    const gaScript = document.createElement('script');
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-BPM4F8NM9M";
    gaScript.async = true;
    document.body.appendChild(gaScript);

    gaScript.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-BPM4F8NM9M');
    };

   
    return () => {
      document.body.removeChild(tidioScript);
      document.body.removeChild(gaScript);
    };
  }, []);

  return (
    <div className="home">
     
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to We4Tech
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.7, duration: 1 }}
          >
            Your partner in digital transformation. We provide innovative tech solutions tailored to your business needs.
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.9, duration: 1 }}
          >
            "Empowering businesses with cutting-edge technology!"
          </motion.h2>
          <Link to="/services" className="btn">Explore Our Services</Link>
        </div>
      </section>


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
            <FaBrain className="service-icon" />
            <h3>Machine Learning</h3>
            <p>Unlock insights and automation with advanced machine learning solutions that enhance user experience and drive intelligent decision-making.</p>
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

      
      <section className="parallax-section">
        <div className="parallax-content">
          <h2>We Drive Innovation in Every Project</h2>
          <p>Your vision, our expertise – bringing your ideas to life with modern web solutions.</p>
        </div>
      </section>

      
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
