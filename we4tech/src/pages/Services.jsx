import { motion } from 'framer-motion';
import './Services.css';

const servicesData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-code"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 11.5L2.5 8l3-3 1 1-2 2h8l-2 2 1 1-3 3-3-3z" />
        <path d="M11.5 4.5L14.5 8l-3 3-1-1 2-2H3l2-2-1-1 3-3 3 3z" />
      </svg>
    ),
    title: 'Web Development',
    description: 'We create responsive, high-quality websites that provide a seamless user experience across all devices.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-phone"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 14.342a1 1 0 0 1-1.454-.045l-1.059-1.059a1 1 0 0 1-.045-1.454 7.953 7.953 0 0 0 2.083-5.034A7.97 7.97 0 0 0 6.712 1.256 1 1 0 0 1 7.766.33l1.308.414a1 1 0 0 1 .5 1.21 5.953 5.953 0 0 1-.947 2.784A5.947 5.947 0 0 1 7.3 8.547a1 1 0 0 1-.764.626l-.8.2a1 1 0 0 1-1.196-1.196l.2-.8a1 1 0 0 1 .626-.764 7.955 7.955 0 0 0 3.334-3.334 1 1 0 0 1 1.21-.5l.414 1.308a1 1 0 0 1-.33 1.484 5.95 5.95 0 0 1-2.705.947A5.97 5.97 0 0 1 3.5 9.758a1 1 0 0 1-1.096.764l-1.308-.414a1 1 0 0 1-.3-1.82 7.99 7.99 0 0 0 5.033-2.083A7.953 7.953 0 0 0 14.342 11.742z" />
      </svg>
    ),
    title: 'Progressive Web Apps (PWA)',
    description: 'Our PWAs offer a native app-like experience with fast loading times and offline capabilities.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-layout"
        viewBox="0 0 16 16"
      >
        <path d="M0 0h16v16H0V0zm1 1v14h14V1H1z" />
        <path d="M1 1v14h14V1H1zm3 3h8v8H4V4z" />
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'We focus on creating intuitive designs that enhance user satisfaction and engagement.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-film"
        viewBox="0 0 16 16"
      >
        <path d="M3.5 0A1.5 1.5 0 0 0 2 1.5V14.5A1.5 1.5 0 0 0 3.5 16h9A1.5 1.5 0 0 0 14 14.5V1.5A1.5 1.5 0 0 0 12.5 0h-9zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5V13a1.5 1.5 0 0 1-1.5 1.5H1.5A1.5 1.5 0 0 1 0 13V2.5z" />
      </svg>
    ),
    title: 'Video Editing',
    description: 'Professional video editing services that bring your stories to life with stunning visuals and effects.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6 6 0 1 0-1.388 1.388l3.829 3.828a1 1 0 0 0 1.415-1.415l-3.828-3.829zM6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
      </svg>
    ),
    title: 'SEO Optimization',
    description: 'Our SEO strategies help your website rank higher on search engines, attracting more visitors and increasing visibility.',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // staggered animation
          >
            <div className="icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="cta-container">
        <h2>Ready to take your project to the next level?</h2>
        <p>Contact us today to discuss your requirements and get a free quote!</p>
        <a href="/contact" className="cta-button">Get Started</a>
      </div>
    </div>
  );
};

export default Services;
