import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    const activate = (event) => {
      const target = event.target;
      setActive(Boolean(target.closest('a, button, .project-card, .glass-card')));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', activate);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', activate);
    };
  }, []);

  return (
    <motion.div
      className={`custom-cursor ${active ? 'is-active' : ''}`}
      animate={{ x: position.x - 14, y: position.y - 14, scale: active ? 1.8 : 1 }}
      transition={{ type: 'spring', stiffness: 450, damping: 32, mass: 0.5 }}
    />
  );
}

export default CustomCursor;
