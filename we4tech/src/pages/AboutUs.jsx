
import { motion } from 'framer-motion';
import './AboutUs.css'; // Importing styles


const teamMembers = [
  {
    name: 'Hariharanath',
    role: 'Frontend Developer',
    description: 'Specializing in creating user-friendly interfaces and dynamic web applications.',
    github: 'https://github.com/hariharanath',
    linkedin: 'https://linkedin.com/in/hariharanath',
    photo: '../assets/Hari.jpg', // Replace with actual path
  },
  {
    name: 'Anand',
    role: 'Backend Developer',
    description: 'Experienced in server-side logic and database management for robust applications.',
    github: 'https://github.com/anand',
    linkedin: 'https://linkedin.com/in/anand',
    photo: 'path_to_anand_photo.jpg', // Replace with actual path
  },
  {
    name: 'Aaran',
    role: 'Frontend Developer',
    description: 'Passionate about building seamless web experiences and engaging user interfaces.',
    github: 'https://github.com/aaran',
    linkedin: 'https://linkedin.com/in/aaran',
    photo: 'path_to_aaran_photo.jpg', // Replace with actual path
  },
  {
    name: 'Vedant',
    role: 'Graphic Designer',
    description: 'Creative mind behind visual designs and branding strategies.',
    github: 'https://github.com/vedant',
    linkedin: 'https://linkedin.com/in/vedant',
    photo: 'path_to_vedant_photo.jpg', // Replace with actual path
  },
  {
    name: 'Teja',
    role: 'UI/UX Designer',
    description: 'Expert in user-centered design and enhancing user experience.',
    github: 'https://github.com/teja',
    linkedin: 'https://linkedin.com/in/teja',
    photo: 'path_to_teja_photo.jpg', // Replace with actual path
  },
  {
    name: 'Manohar',
    role: 'Video Editor',
    description: 'Skilled in crafting engaging video content and post-production editing.',
    github: 'https://github.com/manohar',
    linkedin: 'https://linkedin.com/in/manohar',
    photo: 'path_to_manohar_photo.jpg', // Replace with actual path
  },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      <motion.h1 className="about-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        About Us
      </motion.h1>
      <motion.p className="about-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        We are a passionate team dedicated to providing top-notch web   development services, specializing in PWA, SEO, UI/UX design, and much more.
      </motion.p>

      <div className="team-container">
        {teamMembers.map((member) => (
          <motion.div className="team-card" key={member.name} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <img src={member.photo} alt={`${member.name}`} className="team-photo" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <p className="team-member-description">{member.description}</p>
            <div className="social-links">
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
