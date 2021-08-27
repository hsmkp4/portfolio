import { motion } from 'framer-motion';
import React, { useState } from 'react';
import '../css/Toggle.css';

function Toggle({ children, title }) {
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div className="toggle" layout onClick={() => setToggle(!toggle)}>
      <motion.h2 layout className="toggle-h2">
        {title}
      </motion.h2>
      <div>{toggle && children}</div>
      <div className="toggle-line"></div>
    </motion.div>
  );
}

export default Toggle;
