import React from 'react';
import '../css/SideNav.css';
import instagram from '../img/ins2.svg';
import linkedin from '../img/link2.svg';
import github from '../img/github-brands.svg';
import email from '../img/mail2.svg';
import logo from '../img/logo-haa.svg';
import { motion } from 'framer-motion';
import { heroTitle } from '../animate';

function SideNav() {
  return (
    <div className="sideNav">
      <div className="sideNav__para">
        <motion.p variants={heroTitle}>Developer who can Design</motion.p>
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div className="sideNav__socials">
        <motion.img
          variants={heroTitle}
          src={linkedin}
          alt="linkedin"
          className="sideNav__socials-ic"
        />
        <motion.img
          variants={heroTitle}
          src={github}
          alt="github"
          className="sideNav__socials-ic"
        />
        <motion.img
          variants={heroTitle}
          src={instagram}
          alt="instagram"
          className="sideNav__socials-ic"
        />
        <motion.img
          variants={heroTitle}
          src={email}
          alt="email"
          className="sideNav__socials-ic"
        />
      </div>
    </div>
  );
}

export default SideNav;
