import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';
import game from '../assets/game.jpg';
import saline from '../assets/salinity_pic.jpg';
import portfolio from '../assets/portfolio.jpg';
import music from '../assets/music.jpg';
import systolic from '../assets/systolic.png';

const projectData = [
  {
    title: "Python Game",
    image: game,
    tags: ["Python", "Pygame", "PyTorch"],
    url: "https://github.com/RichardWangg/1v1-Shooter-Game",
  },
  {
    title: "Salinity Tester",
    image: saline,
    tags: ["C/C++", "STM32 Microcontroller"],
    url: "https://github.com/RichardWangg/Salinity-Tester",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    tags: ["React", "JavaScript", "CSS"],
    url: "https://github.com/RichardWangg/Personal-Website-2",
  },
  {
    title: "Music Website",
    image: music,
    tags: ["React", "Node.js", "JavaScript"],
    url: "https://github.com/RichardWangg/Music-Charting-Website",
  },
  {
    title: "Systolic Array",
    image: systolic,
    tags: ["SystemVerilog", "Hardware", "GTKWave"],
    url: "https://github.com/RichardWangg/System-Verilog-Systolic-Array-Project",
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
        viewport={{ once: false, amount: 0.5 }}
      >
        <h1>Projects</h1>
        <p className="home-subtitle">
          Take a look at some projects I've worked on. They've been great opportunities to explore new ideas, build cool stuff, and keep learning along the way.
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
