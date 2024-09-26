import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css'; // Importing styles
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/{YOUR_FORM_ID}', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } else {
      alert('There was an issue sending your message. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <motion.h1 
        className="contact-title" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}>
        Contact Us
      </motion.h1>
      <motion.p 
        className="contact-description" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}>
        We’d love to hear from you! Fill  out the form below and we’ll get back to you shortly.
      </motion.p>

      <div className="contact-info">
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Address</h3>
          <p>Your Address Here</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>info@we4techagency.com</p>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p>+1 234 567 890</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <motion.input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
        />
        <motion.input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
        />
        <motion.textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message}
          onChange={handleChange}
          required 
          rows="5"
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }} 
        />
        <motion.button 
          type="submit" 
          className="submit-button" 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }}>
          Send Message
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
