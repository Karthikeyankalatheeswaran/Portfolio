import { motion } from "framer-motion";

function FadeInWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} // Reduced from 0.8
      viewport={{ once: true, amount: 0.1 }} // Reduced trigger amount
    >
      {children}
    </motion.div>
  );
}
export default FadeInWrapper;
