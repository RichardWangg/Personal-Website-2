import { motion } from 'framer-motion';

const Experience = () => (
  <div className="section experience">
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.8 }}
    >
      <h1>💼 Experience</h1>
      <ul>
        <li>Frontend Intern at DevCo</li>
        <li>Open Source Contributor</li>
        <li>Built 10+ personal projects</li>
      </ul>
    </motion.div>
  </div>
);

export default Experience;
