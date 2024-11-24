import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Projects.css';
import academicPalImage from '../assets/academicpal.png';
import globallane from '../assets/globallane.jpg';
import designGrid from '../assets/designgrid.jpg';
import skillCrafters from '../assets/skill crafters.jpg';
import academicpal20 from '../assets/academic2.0.jpg';
import portfolio1 from '../assets/Screenshot 2024-10-18 203028.png';

import portfolio3 from '../assets/portfolio3.png';
import portfolio4 from '../assets/portfolio4.png';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import video5 from '../assets/video5.mp4';
import video6 from '../assets/video6.mp4';
import graphic1 from '../assets/graphic1.png';
import graphic2 from '../assets/graphic2.png';
import graphic3 from '../assets/graphic3.png';
import graphic4 from '../assets/graphic4.png';
import acm from '../assets/acm.jpg';
import portfolio5 from '../assets/Portfolio5.png';
import portfolio6 from '../assets/Screenshot 2024-10-18 200552.png';
import portfolio7 from '../assets/Screenshot 2024-10-18 200650.png';
import portfolio8 from '../assets/Screenshot 2024-10-18 200814.png';
import portfolio9 from '../assets/Screenshot 2024-10-18 200855.png';
import portfolio10 from '../assets/Screenshot 2024-10-18 201015.png';
import portfolio11 from '../assets/Screenshot 2024-10-18 201117.png';
import portfolio12 from '../assets/Screenshot 2024-10-18 201247.png';
import portfolio13 from '../assets/Screenshot 2024-10-18 204055.png';
import portfolio14 from '../assets/Screenshot 2024-10-18 204513.png';
import portfolio15 from '../assets/Screenshot 2024-10-18 232953.png';
import portfolio16 from '../assets/Screenshot 2024-10-18 233056.png';
import portfolio27 from '../assets/Screenshot 2024-10-30 181728.png';
import portfolio28 from '../assets/Screenshot 2024-10-30 183847.png';
import portfolio29 from '../assets/Screenshot 2024-10-30 184254.png';
import portfolio30 from '../assets/Screenshot 2024-10-30 184523.png';
import portfolio31 from '../assets/Screenshot 2024-10-30 184756.png';
import portfolio32 from '../assets/banner.png';
// Project data for different categories
const projects = [
  
  {
    title: "Global Lane",
    description: "A platform for import/export of agricultural products, supporting sustainable trade.",
    image: globallane,
    websiteLink: "https://www.global-lane.com/",
    githubLink: "https://github.com/global-lane"
  },
  {
    title: "Design Grid",
    description: "A design platform with customizable templates for web designers.",
    image: designGrid,
    websiteLink: "https://designgrid-two.vercel.app/",
    githubLink: "https://github.com/designgrid"
  },
  {
    title: "Skill Crafters",
    description: "Educational platform with curated roadmaps for aspiring developers.",
    image: skillCrafters,
    websiteLink: "https://skill-crafters.vercel.app/",
    githubLink: "https://github.com/skillcrafters"
  },
  {
    title: "Academic Pal",
    description: "Provides comprehensive notes for B.Tech students across semesters.",
    image: academicPalImage,
    websiteLink: "https://academicpal7.onrender.com/",
    githubLink: "https://github.com/academicpal"
  },
  {
    title: "Academic Pal 2.0",
    description: "Enhanced version of Academic Pal with personalized study plans and quizzes.",
    image: academicpal20,
    websiteLink: "https://academic-pal-v9t9.onrender.com/",
    githubLink: "https://github.com/academicpal2"
  },
  {
    title: "ACM Club  website",
    description: "The ACM Club website serves as a hub for students passionate about computer science and technology. It features personalized study plans, interactive quizzes, and resources to enhance programming skills. Join a community of learners, collaborate on projects, and participate in workshops and events designed to foster innovation and professional growth.",
    image: acm,
    websiteLink: "https://acm-website2.vercel.app/",
    githubLink: "https://github.com/academicpal2"
  }
];

const portfolios = [
  {
    title: "professional Portfolio",
    description: "Interactive portfolio for students.",
    image: portfolio32,
    websiteLink: "https://hariharanath.is-cod.in/",
    githubLink: "#"
  },
  {
    title: "Personal Portfolio",
    description: "Interactive portfolio for students.",
    image: portfolio1,
    websiteLink: "https://hari-portfolio-one.vercel.app/",
    githubLink: "#"
  },
  
  
  {
    title: "SRM CSE Portfolio 1",
    description: "Custom portfolio designed for SRM CSE students.",
    image: portfolio5,
    websiteLink: "https://harsha.is-cod.in",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 2",
    description: "Interactive and modern portfolio showcasing SRM CSE student projects.",
    image: portfolio16,
    websiteLink: "https://amar-nadh.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 3",
    description: "Engaging and modern portfolio for SRM CSE students.",
    image: portfolio6,
    websiteLink: "https://y-bharath.vercel.app/",
    githubLink: "#"
  },
  
  {
    title: "SRM CSE Portfolio 4",
    description: "Responsive portfolio for SRM CSE students showcasing projects.",
    image: portfolio8,
    websiteLink: "https://chandrahaas.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 5",
    description: "Stylish portfolio template for SRM CSE students with a focus on clean design.",
    image: portfolio9,
    websiteLink: "https://abhinavreddyportfolio.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 6",
    description: "Portfolio template featuring academic and project work for SRM CSE students.",
    image: portfolio10,
    websiteLink: "https://mahendra-portfolio-five.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 7",
    description: "A professional portfolio template designed for SRM CSE students.",
    image: portfolio11,
    websiteLink: "https://saianuragh.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 8",
    description: "Interactive and modern portfolio showcasing SRM CSE student projects.",
    image: portfolio12,
    websiteLink: "https://l-dinesh.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 9",
    description: "Interactive and modern portfolio showcasing SRM CSE student projects.",
    image: portfolio13,
    websiteLink: "https://achyuth-zeta.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 10",
    description: "Interactive and modern portfolio showcasing SRM CSE student projects.",
    image: portfolio14,
    websiteLink: "https://r-kiran.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 11",
    description: "Interactive and modern portfolio showcasing SRM CSE student projects.",
    image: portfolio15,
    websiteLink: "https://devi-sri-prasad.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 12",
    description: "Sleek portfolio template with interactive features for SRM CSE students.",
    image: portfolio7,
    websiteLink: "https://s-guru-charan.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 13",
    description: "Sleek portfolio template with interactive features for SRM CSE students.",
    image: portfolio27,
    websiteLink: "https://achuthan.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 14",
    description: "Sleek portfolio template with interactive features for SRM CSE students.",
    image: portfolio28,
    websiteLink: "https://srinath.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 15",
    description: "Sleek portfolio template with interactive features for SRM CSE students.",
    image: portfolio29,
    websiteLink: "https://srinath.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 16",
    description: "Sleek portfolio template with interactive features for SRM CSE students.",
    image: portfolio30,
    websiteLink: "https://dheepesh.vercel.app/",
    githubLink: "#"
  },
  {
    title: "SRM CSE Portfolio 17",
    description: "Sleek portfolio template with interactive features for SRM CSE students.",
    image: portfolio31,
    websiteLink: "https://manojh-s.vercel.app/",
    githubLink: "#"
  },
  {
    title: "Student Portfolio",
    description: "Interactive portfolio for students.",
    image: portfolio3,
    websiteLink: "https://685949a9-ab03-46b7-9f97-c7b78717e54d-00-9hp8qud45xhm.worf.replit.dev/",
    githubLink: "#"
  },
  {
    title: "Freelancer Portfolio",
    description: "Interactive portfolio for freelancers.",
    image: portfolio4,
    websiteLink: "https://73320e7a-14af-4175-9514-b0f8601f8cf8-00-1uhib662k0v0a.spock.replit.dev/",
    githubLink: "#"
  },
];

const videoEditingProjects = [
  {
    title: "Cinematic Travel Vlog",
    description: "A beautifully edited cinematic video capturing scenic landscapes.",
    videoLink: video1,
    websiteLink: "#",
    githubLink: "#"
  },
  {
    title: "Music Video with Motion Graphics",
    description: "Creative music video featuring dynamic motion graphics and visual effects.",
    videoLink: video2,
    websiteLink: "#",
    githubLink: "#"
  },
  {
    title: "Corporate Video Editing",
    description: "Professional corporate video edited for brand promotion.",
    videoLink: video3,
    websiteLink: "#",
    githubLink: "#"
  },
  {
    title: "Event Highlight Reel",
    description: "Highlights of a large-scale event, edited with transitions and effects.",
    videoLink: video4,
    websiteLink: "#",
    githubLink: "#"
  },
  {
    title: "Wedding Cinematic Edit",
    description: "A cinematic edit of a wedding ceremony, capturing key moments.",
    videoLink: video5,
    websiteLink: "#",
    githubLink: "#"
  },
  {
    title: "Documentary Short Film",
    description: "A short documentary film edited with a focus on storytelling.",
    videoLink: video6,
    websiteLink: "#",
    githubLink: "#"
  }
];

const graphicDesignProjects = [
  {
    title: "Poster Design",
    description: "Creative poster design for an event.",
    image: graphic1,
    websiteLink: "#",
    githubLink: "#"
  },
  {
    title: "Social Media Graphics",
    description: "Designs for social media campaigns.",
    image: graphic2,
    websiteLink: "#",
    githubLink: "#"
  },
  {
    title: "Poster Design",
    description: "Creative poster design for an event.",
    image: graphic3,
    websiteLink: "#",
    githubLink: "#"
  },
  {
    title: "Social Media Graphics",
    description: "Designs for social media campaigns.",
    image: graphic4,
    websiteLink: "#",
    githubLink: "#"
  }
];

// Main Projects Component
const Projects = () => {
  return (
    <section className="projects-section">
      {/* Web Projects Section */}
      <h1 className="section-title">Our Web Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.websiteLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Visit Site
                </a>
                <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Portfolios Section */}
      <h1 className="section-title">Portfolios We Build</h1>
      <div className="projects-grid">
        {portfolios.map((portfolio, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img src={portfolio.image} alt={portfolio.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{portfolio.title}</h2>
              <p className="project-description">{portfolio.description}</p>
              <div className="project-links">
                <a href={portfolio.websiteLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View Portfolio
                </a>
                <a href={portfolio.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Editing Projects Section */}
      <h1 className="section-title">Video Editing Projects</h1>
      <div className="projects-grid">
        {videoEditingProjects.map((videoProject, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="video-wrapper">
              <video controls>
                <source src={videoProject.videoLink} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="project-content">
              <h2 className="project-title">{videoProject.title}</h2>
              <p className="project-description">{videoProject.description}</p>
              <div className="project-links">
                <a href={videoProject.websiteLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View Project
                </a>
                <a href={videoProject.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Graphic Design Projects Section */}
      <h1 className="section-title">Graphic Design Projects</h1>
      <div className="projects-grid">
        {graphicDesignProjects.map((graphicProject, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img src={graphicProject.image} alt={graphicProject.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{graphicProject.title}</h2>
              <p className="project-description">{graphicProject.description}</p>
              <div className="project-links">
                <a href={graphicProject.websiteLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View Project
                </a>
                <a href={graphicProject.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
