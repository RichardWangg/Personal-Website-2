import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

const Projects = () => (
  <Element name="projects" className="section">
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.8 }}
    >
      <h1>🛠️ Projects</h1>
      <p>Portfolio, Weather App, Todo Tracker, and more.</p>
    </motion.div>
  </Element>
);

export default Projects;
