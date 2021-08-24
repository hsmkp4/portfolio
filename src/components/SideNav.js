import React from 'react';
import '../css/SideNav.css';
import instagram from '../img/instagram-square-brands.svg';
import linkedin from '../img/linkedin-brands.svg';
import github from '../img/github-brands.svg';
import email from '../img/envelope-square-solid.svg';
import logo from '../img/logo-haa.svg';
import { motion } from 'framer-motion';
import { heroTitle } from '../animate';

function SideNav() {
  return (
    <div className="sideNav">
      <div className="sideNav__para">
        <motion.p variants={heroTitle}>Developer who can Design!!</motion.p>
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div className="sideNav__socials">
        <motion.img variants={heroTitle} src={linkedin} alt="linkedin" />
        <motion.img variants={heroTitle} src={github} alt="github" />
        <motion.img variants={heroTitle} src={instagram} alt="instagram" />
        <motion.img variants={heroTitle} src={email} alt="email" />
      </div>
    </div>
  );
}

export default SideNav;
