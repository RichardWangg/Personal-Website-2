import { useEffect } from 'react';
import { motion } from 'framer-motion';

const IntroLogo = ({ onAnimationComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onAnimationComplete, 2500);
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <motion.div
      initial={{ top: '50%', left: '50%', x: '-50%', y: '-50%', opacity: 0 }}
      animate={{
        top: ['50%', '50%', '-20%'],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        top: { duration: 1.25, times: [0, 0.5, 1], ease: 'easeInOut', delay: 1 },
        opacity: { duration: 3, times: [0, 0.2, 0.8, 1], ease: 'easeInOut' },
      }}
      style={{
        position: 'fixed',
        fontFamily: "'Rock Salt', cursive",
        fontSize: '2rem',
        color: 'white',
        zIndex: 1000,
        pointerEvents: 'none',
      }}
    >
      Richard Wang
    </motion.div>
  );
};

export default IntroLogo;
