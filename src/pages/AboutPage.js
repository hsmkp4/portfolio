import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimate } from '../animate';

function AboutPage() {
  return (
    <motion.div
      variants={pageAnimate}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>i am hesam from iran</h1>
    </motion.div>
  );
}

export default AboutPage;
