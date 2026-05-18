import { motion } from 'framer-motion';
import { FiBookOpen, FiCpu, FiLayers, FiZap } from 'react-icons/fi';
import { education, interpersonalSkills, profile } from '../../data/portfolioData';

function About() {
  const cards = [
    { icon: FiLayers, title: 'React-focused development', copy: 'I build responsive, modular interfaces with clean component structure and strong attention to usability.' },
    { icon: FiCpu, title: 'IoT project mindset', copy: 'My IoT delivery robot work connects embedded hardware, sensors, and practical automation logic.' },
    { icon: FiZap, title: 'Internship ready execution', copy: 'I bring adaptability, self-learning, and a problem-solving approach to frontend and full stack tasks.' },
  ];

  return (
    <section id="about" className="section-shell">
      <motion.div className="section-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="eyebrow">About Me</span>
        <h2>Full Stack Developer building scalable web applications and modern digital experiences.</h2>
        <p>
          I am {profile.name}, a Full Stack Developer and React.js Developer with hands-on
          experience in MERN projects, REST APIs, Java, SQL, Git, GitHub, and IoT prototypes.
          I am actively preparing for placement and internship opportunities where I can
          contribute to polished frontend experiences and reliable product features.
        </p>
      </motion.div>

      <motion.article
        className="education-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <FiBookOpen />
        <div>
          <span className="timeline-period">Education</span>
          <h3>{education.institute}</h3>
          <p>{education.degree}</p>
        </div>
        <strong>{education.score}</strong>
        <small>{education.period}</small>
      </motion.article>

      <div className="about-grid">
        {cards.map(({ icon: Icon, title, copy }, index) => (
          <motion.article
            className="glass-card"
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
          >
            <Icon />
            <h3>{title}</h3>
            <p>{copy}</p>
          </motion.article>
        ))}
      </div>

      <div className="soft-skills" aria-label="Interpersonal skills">
        {interpersonalSkills.map(({ name, icon: Icon }) => (
          <span key={name}><Icon /> {name}</span>
        ))}
      </div>
    </section>
  );
}

export default About;
