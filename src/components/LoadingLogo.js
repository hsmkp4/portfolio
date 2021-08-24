import React from 'react';
import sign from '../img/sign.svg';
import logo from '../img/logo-haa.svg';
import '../css/LoadingPage.css';

import { motion } from 'framer-motion';

function LoadingLogo({ setLoadingPage }) {
  const handlePageClick = () => {
    setLoadingPage(false);
  };
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 1 } }}
      onClick={handlePageClick}
      className="loadingPage"
    >
      <h1>Click anywhere you want </h1>
      <img src={logo} alt="logo" className="loadingPage__logo" />
      <div>
        <motion.svg
          className="loadingPage__sign-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 282.19 248.21"
        >
          <motion.path
            initial={{ pathLength: 0, pathOffset: -1 }}
            animate={{
              pathLength: 1,
              width: '200%',
              pathOffset: 0,
              scale: 0.25,
              transition: { duration: 3, ease: 'easeOut' },
            }}
            fill="none"
            stroke="#c34"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="6px"
            class="cls-1"
            d="M258.94,227.83C245,238.05,237.47,242,228.22,240c-9.66-2.14-9.67-20-18.23-23.29-10.55-4.1-44.22,24.26-51.05,25.74-9.25,2-10.63-.51-32.33-27S23.18,189.65,9.27,213.5c-11.61,19.91-4.39,39.74,25.17,26.33s89.8-100.1,136-168c41.5-61,83-80,100.9-53.06,16.73,25.15,4,43.06-51.4,75.56C172,122.43,57.74,153.85,43.27,110S114.6,4,114.6,4"
          />
        </motion.svg>
      </div>
    </motion.div>
  );
}

export default LoadingLogo;
