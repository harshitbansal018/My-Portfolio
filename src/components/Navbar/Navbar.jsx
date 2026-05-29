import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../../data/portfolioData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      const current = sections.reduce(
        (match, section) =>
          section.getBoundingClientRect().top <= 120 ? section : match,
        sections[0]
      );

      if (current) {
        setActive(`#${current.id}`);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      {/* Logo */}
      <a
        href="#home"
        className="brand"
        onClick={closeMenu}
        aria-label="Harshit Bansal Home"
      >
        <span>HB</span>
        <strong>Harshit</strong>
      </a>

      {/* Desktop Navigation */}
      <nav className="desktop-nav" aria-label="Primary Navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Resume Button */}
      <a
        className="resume-pill"
        href="/Harshit_bansal_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiDownload />
        Resume
      </a>

      {/* Mobile Menu Button */}
      <button
        className="menu-button"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/Harshit_bansal_resume.pdf"
              download="Harshit_bansal_resume.pdf"
              onClick={closeMenu}
            >
              <FiDownload />
              Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;