import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

const skills = [
  { name: "JavaScript", icon: "/profile3.jpg" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Node.js", icon: "/icons/node.png" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "C++", icon: "/icons/cpp.png" },
  { name: "Git", icon: "/icons/git.png" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
  { name: "Firebase", icon: "/icons/firebase.png" },
  { name: "SQL", icon: "/icons/sql.png" },
  { name: "REST APIs", icon: "/icons/api.png" },
];

const Skills = () => (
  <Element name="skills" className="section">
    <motion.div
      className="section-content"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.8 }}
    >
      <h1>Skills</h1>
      <p className="home-subtitle">Here's a look at some of the technologies and tools I'm comfortable with:</p>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            className="skill-tag"
            key={i}
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Element>
);

export default Skills;
