import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimate } from '../animate';
import ContactSec from '../components/ContactSec';

function ContactPage() {
  return (
    <motion.div
      variants={pageAnimate}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ContactSec />
    </motion.div>
  );
}

export default ContactPage;
