import { motion } from 'framer-motion';
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { contactLinks, profile, socials } from '../../data/portfolioData';

function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Open to internships, placements, and product-focused web roles.</h2>
          <p>
            Reach out for React.js development, MERN stack projects, frontend internships,
            or IoT-focused collaboration opportunities.
          </p>
        </div>

        <div className="contact-actions">
          <a href={contactLinks.email} className="primary-btn">
            <FiMail />
            Email Me
          </a>
          <a href="#home" className="ghost-btn">
            Back Top
            <FiArrowUpRight />
          </a>
        </div>

        <div className="contact-info">
          <a href={contactLinks.email}><FiMail /> {profile.email}</a>
          <a href={contactLinks.phone}><FiPhone /> {profile.phone}</a>
          <span><FiMapPin /> {profile.location}</span>
        </div>

        <div className="contact-socials">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              <Icon />
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
