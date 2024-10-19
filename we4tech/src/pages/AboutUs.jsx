import { motion } from 'framer-motion';
import './AboutUs.css'; // Importing styles
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiVite, SiReact, SiTailwindcss, SiBootstrap, SiBulma, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiFirebase, SiTensorflow, SiPython, SiPytorch, SiScikitlearn, SiKeras } from 'react-icons/si';
import HARI from '../assets/Hari.jpg';
import Anand from '../assets/anand.jpeg';
import Aaran from '../assets/aran.jpg';
import vedanth from '../assets/vedant.jpg';
import Teja from '../assets/WhatsApp Image 2024-10-18 at 21.08.55_2fd43143.jpg';
import Manohar from '../assets/Screenshot 2024-10-11 215812.png';
import Devdat from '../assets/Devdat.png';

const teamMembers = [
  {
    name: 'Anand',
    role: 'Backend Developer',
    description: 'Experienced in server-side logic and database management for robust applications.',
    github: 'https://github.com/anandbobba',
    linkedin: 'https://www.linkedin.com/in/anandbobba/',
    photo: Anand, // Replace with actual path
  },
  {
    name: 'Teja',
    role: 'Machine Learning Integrator',
    description: 'Specializes in integrating machine learning models into real-world applications, with a focus on seamless deployment and scalability.',
    github: 'https://github.com/Gunateja653',
    linkedin: 'https://www.linkedin.com/in/guna-teja-sarvan-patnaik-0942a2275/',
    photo: Teja, // Replace with actual path
  },
  {
    name: 'Aaran',
    role: 'Frontend Developer',
    description: 'Passionate about building seamless web experiences and engaging user interfaces.',
    github: 'https://github.com/Araan-Sheikh',
    linkedin: 'https://www.linkedin.com/in/araan-sheikh-523715327?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAFKCeasB33_ThhQp27XhiLc9eZN5sDS9bjU&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bk2p2qqNkRJS9QOe%2Faiwvgw%3D%3D',
    photo: Aaran, // Replace with actual path
  },
  {
    name: 'Vedant',
    role: 'Graphic Designer',
    description: 'Creative mind behind visual designs and branding strategies.',
    github: 'https://github.com/Vedant10Mahalle',
    linkedin: 'https://www.linkedin.com/in/vedant-mahalle-b217b4290/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BZSINcN5rS3i%2FB8FFRpsrtw%3D%3D',
    photo: vedanth, // Replace with actual path
  },
  {
    name: 'Devdat',
    role: 'Graphic Designer',
    description: 'Creative mind behind visual designs and branding strategies.',
    github: 'https://github.com/devdat2021',
    linkedin: 'https://www.linkedin.com/in/devdat-p-b59415327/',
    photo: Devdat, // Replace with actual path
  },
  {
    name: 'Manohar',
    role: 'Video Editor',
    description: 'Skilled in crafting engaging video content and post-production editing.',
    instagram: 'https://www.instagram.com/manoharnaik09/', // Instagram link added
    photo: Manohar, // Replace with actual path
  },
];

const techStack = [
  { name: 'Vite', icon: <SiVite /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Bulma', icon: <SiBulma /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'TensorFlow', icon: <SiTensorflow /> }, // Added TensorFlow
  { name: 'Python', icon: <SiPython /> }, // Added Python
  { name: 'PyTorch', icon: <SiPytorch /> }, // Added PyTorch
  { name: 'scikit-learn', icon: <SiScikitlearn /> }, // Added scikit-learn
  { name: 'Keras', icon: <SiKeras /> }, // Added Keras
];

const AboutUs = () => {
  return (
    <div className="about-container">
      <motion.h1 className="about-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        About Us
      </motion.h1>
      <motion.p className="about-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        We are a passionate team dedicated to providing top-notch web development services, specializing in PWA, SEO, UI/UX design, and much more. Our mission is to create innovative solutions that empower users and enhance their online experiences.
      </motion.p>

      <div className="team-container">
        {teamMembers.map((member) => (
          <motion.div className="team-card" key={member.name} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <img src={member.photo} alt={`${member.name}`} className="team-photo" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <p className="team-member-description">{member.description}</p>
            <div className="social-links">
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <FaGithub />
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              )}
              {member.instagram && (
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <FaInstagram />
                </a>
              )}
            </div>
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="github-button">
              View GitHub
            </a>
          </motion.div>
        ))}
      </div>

      <motion.h2 className="tech-stack-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
        Tech Stack
      </motion.h2>
      <div className="tech-stack-container">
        {techStack.map((tech) => (
          <motion.div className="tech-card" key={tech.name} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="tech-icon">{tech.icon}</div>
            <p className="tech-name">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
