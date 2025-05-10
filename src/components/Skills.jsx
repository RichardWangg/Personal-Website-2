import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

const skills = [
  { name: "Python", icon: "/Python-Logo.png" },
  { name: "JavaScript", icon: "/JavaScript-Logo.png" },
  { name: "C++", icon: "/CPP-Logo.png" },
  { name: "C", icon: "/C-Logo.png" },
  { name: "React", icon: "/React-Logo.png" },
  { name: "Node.js", icon: "/node.png" },
  { name: "TypeScript", icon: "/ts.svg" },
  { name: "SQL", icon: "/icons/sql.png" },
];

const Skills = () => (
  <Element name="skills" className="section">
    <div className="section-content">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.8 }}
      >
        <h1>Skills</h1>
        <p className="home-subtitle">Here's a look at some of my favourite technologies and tools I use to build with that I'm passionate about</p>
      </motion.div>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-tag" key={i}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </Element>
);

export default Skills;
