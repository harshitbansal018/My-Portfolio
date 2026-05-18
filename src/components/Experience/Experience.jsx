import { motion } from 'framer-motion';
import { experiences } from '../../data/portfolioData';

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-heading">
        <span className="eyebrow">Experience</span>
        <h2>Hands-on frontend internship experience with UI and optimization work.</h2>
      </div>

      <div className="timeline">
        {experiences.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={`${item.role}-${item.company}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <span className="timeline-dot" />
            <div>
              <span className="timeline-period">{item.period}</span>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <p>{item.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
