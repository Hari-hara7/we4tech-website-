
import { motion } from 'framer-motion';
import './Projects.css'; // Ensure you create this CSS file

const projectsData = [
  {
    title: "Academic Pal",
    description: "An educational platform providing notes and resources for students.",
    image: "path/to/academic-pal-image.jpg", // Replace with your image paths
    techStack: "React, Vite, CSS, Firebase",
    link: "https://academicpal7.onrender.com/",
  },
  {
    title: "Global Lane",
    description: "Connecting people globally through technology.",
    image: "path/to/global-lane-image.jpg",
    techStack: "React, Vite, Tailwind CSS",
    link: "#",
  },
  {
    title: "Design Grid",
    description: "A platform for designers to showcase their work.",
    image: "path/to/design-grid-image.jpg",
    techStack: "React, Bootstrap, CSS",
    link: "#",
  },
  {
    title: "Skill Scrafters",
    description: "Skill enhancement platform for professionals.",
    image: "path/to/skill-scrafters-image.jpg",
    techStack: "React, HTML, CSS, MongoDB",
    link: "#",
  },
  {
    title: "Dynamic Devs",
    description: "Showcasing innovative development solutions.",
    image: "path/to/dynamic-devs-image.jpg",
    techStack: "React, Firebase, Bulma",
    link: "#",
  },
];

const videoProjects = [
  {
    title: "Video Editing Project 1",
    videoUrl: "https://www.youtube.com/embed/video-id-1", // Replace with actual video URLs
  },
  {
    title: "Video Editing Project 2",
    videoUrl: "https://www.youtube.com/embed/video-id-2",
  },
];

const graphicDesigns = [
  {
    title: "Graphic Design 1",
    image: "path/to/graphic-design-1.jpg",
  },
  {
    title: "Graphic Design 2",
    image: "path/to/graphic-design-2.jpg",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Our Projects</h1>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div className="project-card" key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p className="tech-stack">Tech Stack: {project.techStack}</p>
            <a href={project.link} className="project-button">View Project</a>
          </motion.div>
        ))}
      </div>

      <section className="video-section">
        <h2 className="section-title">Video Editing Projects</h2>
        <div className="video-grid">
          {videoProjects.map((video, index) => (
            <div className="video-card" key={index}>
              <h3 className="video-title">{video.title}</h3>
              <iframe
                src={video.videoUrl}
                title={video.title}
                className="video-embed"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      <section className="graphic-design-section">
        <h2 className="section-title">Graphic Designs</h2>
        <div className="graphic-design-grid">
          {graphicDesigns.map((design, index) => (
            <motion.div className="graphic-card" key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={design.image} alt={design.title} className="graphic-image" />
              <h3 className="graphic-title">{design.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
