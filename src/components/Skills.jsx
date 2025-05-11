import { Element } from 'react-scroll';
import { motion } from 'framer-motion'; // Import motion
import pythonLogo from '../assets/Python-Logo.png';
import jsLogo from '../assets/JavaScript-Logo.png';
import cppLogo from '../assets/CPP-Logo.png';
import cLogo from '../assets/C-Logo.png';
import reactLogo from '../assets/React-Logo.png';
import nodeLogo from '../assets/node.png';
import tsLogo from '../assets/ts.svg';
import sqlLogo from '../assets/sql.png';
import awsLogo from '../assets/aws.png';
import firebaseLogo from '../assets/firebase.png';

const skills = [
  { name: "Python", icon: pythonLogo, url: "https://www.python.org/" },
  { name: "JavaScript", icon: jsLogo, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "C++", icon: cppLogo, url: "https://isocpp.org/" },
  { name: "C", icon: cLogo, url: "https://en.cppreference.com/w/c" },
  { name: "React", icon: reactLogo, url: "https://reactjs.org/" },
  { name: "Node.js", icon: nodeLogo, url: "https://nodejs.org/" },
  { name: "TypeScript", icon: tsLogo, url: "https://www.typescriptlang.org/" },
  { name: "SQL", icon: sqlLogo, url: "https://www.mysql.com/" },
  { name: "AWS", icon: awsLogo, url: "https://aws.amazon.com/" },
  { name: "Firebase", icon: firebaseLogo, url: "https://firebase.google.com/" },
];

const Skills = () => (
  <Element name="skills" className="section">
    <div className="section-content">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.8 }}
      >
        Skills
      </motion.h1>
      <motion.p
        className="home-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        viewport={{ once: false, amount: 0.8 }}
      >
        Here are some of the technologies and tools that I'm most passionate about, which I regularly use to build out my ideas
      </motion.p>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <a
            className="skill-tag"
            key={i}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
          </a>
        ))}
      </div>
    </div>
  </Element>
);

export default Skills;
