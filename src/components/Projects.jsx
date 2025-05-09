import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';

const projectData = [
  {
    title: "Portfolio Website",
    image: "/profile3.jpg",
    tags: ["React", "CSS", "Framer Motion"],
    url: "https://github.com/YOUR_USERNAME/portfolio-website",
  },
  {
    title: "Weather App",
    image: "/profile3.jpg",
    tags: ["React", "API", "JavaScript"],
    url: "https://github.com/YOUR_USERNAME/weather-app",
  },
  {
    title: "Todo Tracker",
    image: "/profile3.jpg",
    tags: ["React", "Firebase", "Tailwind"],
    url: "https://github.com/YOUR_USERNAME/todo-tracker",
  },
  {
    title: "Game of Life",
    image: "/profile3.jpg",
    tags: ["C++", "SFML", "Algorithms"],
    url: "https://github.com/YOUR_USERNAME/game-of-life",
  },
  {
    title: "Chat App",
    image: "/images/chat-app.png",
    tags: ["Node.js", "Socket.IO", "React"],
    url: "https://github.com/YOUR_USERNAME/chat-app",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir * 260,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Element name="projects" className="section">
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.8 }}
      >
        <h1>Projects</h1>
        <p className="home-subtitle">
          I’m a Software Engineer and 3rd Year Student Studying Computer Engineering at the University of Waterloo.
          Currently Seeking Fall 2025 Internship Opportunities — let’s get in touch!
        </p>

        <div className="carousel-scroll-wrapper">
          <button className="scroll-arrow left" onClick={() => scroll(-1)}>
            <FaChevronLeft />
          </button>
          <div className="project-scroll-container" ref={scrollRef}>
            {projectData.map((project, idx) => (
              <motion.div
                className="project-mini-card"
                key={idx}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src={project.image} alt={project.title} className="project-image" />
                <h2>
                  <a href={project.url} className="project-link" target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h2>
                <div className="tag-container">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <button className="scroll-arrow right" onClick={() => scroll(1)}>
            <FaChevronRight />
          </button>
        </div>
      </motion.div>
    </Element>
  );
};

export default Projects;
