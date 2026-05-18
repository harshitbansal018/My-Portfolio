import { motion } from 'framer-motion';
import { skillGroups } from '../../data/portfolioData';

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <span className="eyebrow">Skills</span>
        <h2>A modern stack for full stack apps and intelligent systems.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => (
          <motion.article
            className="skill-panel"
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.1 }}
          >
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.skills.map(({ name, level, icon: Icon }) => (
                <div className="skill-item" key={name}>
                  <div className="skill-meta">
                    <span><Icon /> {name}</span>
                    <strong>{level}%</strong>
                  </div>
                  <div className="skill-track">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
