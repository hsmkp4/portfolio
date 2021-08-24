import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimate } from '../animate';

function ContactPage() {
  return (
    <motion.div
      variants={pageAnimate}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>tell me more</h1>
    </motion.div>
  );
}

export default ContactPage;
