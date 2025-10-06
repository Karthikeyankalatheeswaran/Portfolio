import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function MacbookIntro({ onComplete }) {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1800); // Total duration: 1.8 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="macbook-intro vh-100 vw-100 position-fixed top-0 start-0 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "var(--primary-dark)",
          zIndex: 9999,
          pointerEvents: "none",
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Transparent circle that expands to reveal hero */}
        <motion.div
          className="position-relative"
          initial={{
            scale: 0,
            opacity: 0.8,
          }}
          animate={{
            scale: 40,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "circOut",
          }}
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            backgroundColor: "transparent",
            boxShadow: "0 0 0 100vmax var(--primary-dark)",
            mixBlendMode: "difference",
          }}
        />

        {/* Quick flash effect */}
        <motion.div
          className="position-absolute w-100 h-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.9,
          }}
          style={{
            backgroundColor: "var(--accent-gold)",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default MacbookIntro;
