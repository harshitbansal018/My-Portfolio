import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="loader-ring"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.3, repeat: Infinity, ease: 'linear' }}
      />
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        Building Harshit&apos;s portfolio
      </motion.p>
    </motion.div>
  );
}

export default Loader;
