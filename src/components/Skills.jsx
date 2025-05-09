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
