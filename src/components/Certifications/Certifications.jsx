import { motion } from 'framer-motion';
import { FiAward, FiStar } from 'react-icons/fi';
import { achievements, certifications } from '../../data/portfolioData';

function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <div className="section-heading">
        <span className="eyebrow">Certifications & Activities</span>
        <h2>Learning credentials and campus involvement recruiters can scan quickly.</h2>
      </div>

      <div className="activity-grid">
        {achievements.map((item, index) => (
          <motion.article
            className="activity-card"
            key={item}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <FiStar />
            <span>Activity</span>
            <p>{item}</p>
          </motion.article>
        ))}
      </div>

      <div className="cert-grid">
        {certifications.map((item, index) => (
          <motion.article
            className="cert-card"
            key={item}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <FiAward />
            <span>Certification</span>
            <p>{item}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
