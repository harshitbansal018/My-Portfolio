import { motion } from 'framer-motion';
import { socials } from '../../data/portfolioData';

function SocialFloat() {
  return (
    <motion.aside
      className="social-float"
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.9 }}
      aria-label="Social links"
    >
      {socials.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
          <Icon />
        </a>
      ))}
    </motion.aside>
  );
}

export default SocialFloat;
