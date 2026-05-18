import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight, FiDownload, FiMail } from 'react-icons/fi';
import { contactLinks, profile, stats, techMarquee } from '../../data/portfolioData';

function useTyping(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = window.setTimeout(
      () => {
        if (!deleting && letterIndex < current.length) {
          setLetterIndex((value) => value + 1);
        } else if (!deleting) {
          setDeleting(true);
        } else if (letterIndex > 0) {
          setLetterIndex((value) => value - 1);
        } else {
          setDeleting(false);
          setWordIndex((value) => (value + 1) % words.length);
        }
      },
      deleting ? 48 : 88
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, letterIndex, wordIndex, words]);

  return words[wordIndex].slice(0, letterIndex);
}

function Hero() {
  const titles = useMemo(
    () => ['Full Stack Developer', 'React.js Developer', 'IoT Enthusiast'],
    []
  );
  const typed = useTyping(titles);

  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8 }}
        >
          {/* <span className="eyebrow">Placement Ready Portfolio</span> */}
          <h1>
            {profile.name}
            <span>{typed}<i /></span>
          </h1>
          <p>
            Full Stack Developer and React.js Developer pursuing Computer Science
            Engineering at Chandigarh University. I build responsive MERN applications,
            clean recruiter-facing interfaces, and practical IoT prototypes.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#projects">
              View Projects
              <FiArrowDownRight />
            </a>
            <a className="ghost-btn" href="/Harshit_Bansal_Resume.pdf" download>
              <FiDownload />
              Resume
            </a>
            <a className="icon-btn" href={contactLinks.email} aria-label="Email Harshit">
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 2 }}
        >
          <div className="profile-orbit">
            <span />
            <span />
            <span />
            <div className="profile-card">
              <div className="avatar">HB</div>
              <h2>React + MERN + IoT</h2>
              <p>LocalWala SaaS, eco-tourism tracking, ESP32 delivery robot, REST APIs, and recruiter-ready engineering.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="stats-row">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <strong>{stat.value}{stat.suffix}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="tech-marquee" aria-label="Technology stack">
        <div>
          {techMarquee.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
