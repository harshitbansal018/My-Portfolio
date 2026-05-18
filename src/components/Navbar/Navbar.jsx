import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../../data/portfolioData';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);
      const current = sections.reduce(
        (match, section) => (section.getBoundingClientRect().top <= 120 ? section : match),
        sections[0]
      );
      if (current) setActive(`#${current.id}`);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a href="#home" className="brand" onClick={closeMenu} aria-label="Harshit Bansal home">
        <span>HB</span>
        <strong>Harshit</strong>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={active === link.href ? 'active' : ''}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="resume-pill" href="/Harshit_Bansal_Resume.pdf" download>
        <FiDownload />
        Resume
      </a>

      <button
        className="menu-button"
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a href="/Harshit_Bansal_Resume.pdf" download onClick={closeMenu}>
              Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
