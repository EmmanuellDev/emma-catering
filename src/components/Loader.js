import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Simulate loading delay (adjust as needed)
    setTimeout(() => {
      setShow(false);
      onComplete(); // Notify parent to hide loader
    }, 1500); // Adjust timing as needed
  }, [onComplete]);

  return (
    show && (
      <motion.div
        className="fixed inset-0 bg-teal-500 flex items-center justify-center text-white text-2xl font-bold z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        Loading...
      </motion.div>
    )
  );
};

export default Loader;
