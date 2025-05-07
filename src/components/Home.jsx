import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Home = () => (
  <div className="section home" id="home">
    <nav style={{
      position: 'fixed',
      top: '1.5rem',
      left: 0,
      right: 0,
      zIndex: 10,
      backgroundColor: 'transparent',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div className="content-box" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
      }}>
        <Link
          to="home"
          smooth={true}
          duration={600}
          offset={-50}
          style={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Richard Wang
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="experience" smooth={true} duration={600} offset={-50}
            style={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}>
            Experience
          </Link>
          <Link to="projects" smooth={true} duration={600} offset={-50}
            style={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}>
            Projects
          </Link>
        </div>
      </div>
    </nav>

    <div className="content-box">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.8 }}
        style={{ textAlign: 'center' }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Richard Wang</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Welcome to my site.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          fontSize: '1.8rem'
        }}>
          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:your.email@example.com"><FaEnvelope /></a>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Home;
