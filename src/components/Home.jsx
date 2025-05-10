import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profile from '../assets/profile.jpg';

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < 50 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="section home" id="home">
      <nav className={`navbar ${showNavbar ? "show transparent" : "hide blur"}`}>
        <div className="navbar-content section-content">
          <Link to="home" smooth={true} duration={600} offset={-50} className="nav-logo">
            Richard Wang
          </Link>
          <div className="nav-links">
            <Link to="skills" smooth={true} duration={600} offset={-50}>Skills</Link>
            <Link to="experience" smooth={true} duration={600} offset={-50}>Experience</Link>
            <Link to="projects" smooth={true} duration={600} offset={-50}>Projects</Link>
          </div>
        </div>
      </nav>

      <motion.div
        className="section-content"
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.6 }}
      >
        <img src={profile} alt="Profile" className="profile-image" />
        <h1 className="home-title">Hi, I'm Richard! <span className="wave-emoji">👋</span></h1>
        <p className="home-subtitle">
          I’m a Software Engineer and 3rd Year Student Studying Computer Engineering at the University of Waterloo.
          Currently Seeking Fall 2025 Internship Opportunities — let’s get in touch!
        </p>
        <div className="home-icons">
          <a href="https://github.com/RichardWangg" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/richard-wang-15230725b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:r58wang@uwaterloo.ca"><FaEnvelope /></a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
