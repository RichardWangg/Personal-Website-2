import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => (
  <div className="section home">
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
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '1.8rem' }}>
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:your.email@example.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.div>
  </div>
);

export default Home;
