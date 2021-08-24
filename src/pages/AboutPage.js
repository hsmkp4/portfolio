import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimate } from '../animate';
import AboutSec from '../components/AboutSec';

function AboutPage() {
  return (
    <motion.div
      variants={pageAnimate}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSec />
    </motion.div>
  );
}

export default AboutPage;
