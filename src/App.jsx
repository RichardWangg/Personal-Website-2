import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import IntroLogo from './components/IntroLogo';
import './App.css';

function App() {
  const lenis = useRef(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: true,
    });

    lenis.current = lenisInstance;
    window.lenis = lenisInstance;

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <div className="gradient-wrapper">
      {showIntro && <IntroLogo onAnimationComplete={() => setShowIntro(false)} />}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
