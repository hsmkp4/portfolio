import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimate } from '../animate';

import ContactSection from '../components/ContactSection';

function ContactPage() {
  return (
    <motion.div
      variants={pageAnimate}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ContactSection />
    </motion.div>
  );
}

export default ContactPage;
