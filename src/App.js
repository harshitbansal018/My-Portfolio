import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedBackground from './components/Background/AnimatedBackground';
import CustomCursor from './components/Cursor/CustomCursor';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SocialFloat from './components/SocialFloat/SocialFloat';
import './styles/portfolio.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>

      <AnimatedBackground />
      <CustomCursor />
      <Navbar />
      <SocialFloat />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </motion.main>

      <Footer />
    </>
  );
}

export default App;
