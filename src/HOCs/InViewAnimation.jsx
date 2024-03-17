import useAnimate from "Css/Hooks/useAnimate";
import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const InViewAnimation = ({ children, styles }) => {
  const { ref, animation } = useAnimate();
  return (
    <motion.div ref={ref} animate={animation} style={styles}>
      {children}
    </motion.div>
  );
};

export default InViewAnimation;
