import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../css/heroSec.css';
import logo from '../img/logo-haa.svg';
import { motion } from 'framer-motion';
import { heroTitle } from '../animate';

function HeroSec() {
  return (
    <div className="heroSec">
      <div className="heroSec__describ">
        <img src={logo} alt="logo" />
        <motion.h1 variants={heroTitle}>Frontend Developer</motion.h1>
        <motion.p variants={heroTitle}>
          Hi, I am <span>Hesam</span>, a frontend developer who is a specialist
          on <span>React</span> and JavaScript, also I have graphic design
          background and I know a lot of CSS tricks!. I can help you to improve
          your business with <span>modern websites</span>.
        </motion.p>
        {/* <motion.p variants={heroTitle} className="heroSec__describ-last">
          Then Let's go...
        </motion.p> */}
        <div className="heroSec__scroll">
          <FontAwesomeIcon
            className="heroSec__scroll-down arr1"
            icon={faArrowDown}
            size="2x"
          />
          <FontAwesomeIcon
            className="heroSec__scroll-down arr2"
            icon={faArrowDown}
            size="2x"
          />
          <FontAwesomeIcon
            className="heroSec__scroll-down arr3"
            icon={faArrowDown}
            size="2x"
          />
          <FontAwesomeIcon
            className="heroSec__scroll-down arr4"
            icon={faArrowDown}
            size="2x"
          />
          <FontAwesomeIcon
            className="heroSec__scroll-down arr5"
            icon={faArrowDown}
            size="2x"
          />
        </div>
        <div className="glow__right"></div>
        <div className="glow__left"></div>
        <div className="glow2"></div>
        <div className="glow1"></div>
        <div className="glow__all"></div>
        <div className="glow3"></div>
      </div>
    </div>
  );
}

export default HeroSec;
