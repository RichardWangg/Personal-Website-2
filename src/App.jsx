import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

function App() {
  const lenis = useRef(null);

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
      <Home />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
