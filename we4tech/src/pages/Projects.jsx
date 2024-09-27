import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Projects.css';
import academicPalImage from '../assets/academicpal.png';
import globallane from '../assets/Globallane.png';
import designGrid from '../assets/designgrid.png';
import skillCrafters from '../assets/skillcrafters.png';
import academicpal20 from '../assets/academicpal2.0.png';
import portfolio1 from '../assets/portfolio1.png';
import portfolio2 from '../assets/portfolio2.png';
import portfolio3 from '../assets/portfolio3.png';
import portfolio4 from '../assets/portfolio4.png';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import video5 from '../assets/video5.mp4';
import video6 from '../assets/video6.mp4';

// Project data for different categories
const projects = [
  {
    title: "Academic Pal",
    description: "Provides comprehensive notes for B.Tech students across semesters.",
    image: academicPalImage,
    websiteLink: "https://academicpal7.onrender.com/",
    githubLink: "https://github.com/academicpal"
  },
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
    title: "Academic Pal 2.0",
    description: "Enhanced version of Academic Pal with personalized study plans and quizzes.",
    image: academicpal20,
    websiteLink: "https://academic-pal-v9t9.onrender.com/",
    githubLink: "https://github.com/academicpal2"
  }
];

const portfolios = [
  {
    title: "Student Portfolio",
    description: "Interactive portfolio for students.",
    image: portfolio1,
    websiteLink: "https://hari-portfolio-one.vercel.app/",
    githubLink: "#"
  },
  {
    title: "Freelancer Portfolio",
    description: "Interactive portfolio for freelancers.",
    image: portfolio2,
    websiteLink: "https://topg.dad/",
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
  }
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
    image: "/images/graphic1.jpg",
    websiteLink: "#",
    githubLink: "#"
  },
  {
    title: "Social Media Graphics",
    description: "Designs for social media campaigns.",
    image: "/images/graphic2.jpg",
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
