import React, { useEffect, useState } from 'react';
import '../css/SideNav.css';
import instagram from '../img/ins2.svg';
import linkedin from '../img/link2.svg';
import github from '../img/github-brands.svg';
import email from '../img/mail2.svg';
import logo from '../img/logo-haa.svg';
import { motion } from 'framer-motion';
import { heroTitle, logoSideBar } from '../animate';

function SideNav() {
  const [showLogo, setShowLogo] = useState(false);
  const [showPara, setShowPara] = useState(true);
  const handleLinkedin = () => {
    window.open('https://www.linkedin.com/in/hsmkp4/', '_blank');
  };
  const handleGit = () => {
    window.open('https://github.com/El-ition', '_blank');
  };
  const handleInstagram = () => {
    window.open('https://www.instagram.com/blockitffs/', '_blank');
  };
  const handleEmail = () => {
    navigator.clipboard.writeText('hesam.lfl@gmail.com');
    alert('Email copied to your clipboard');
  };
  const handleNavShow = () => {
    if (window.scrollY > 880) {
      setShowLogo(true);
      setShowPara(false);
    } else {
      setShowLogo(false);
      setShowPara(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavShow);
    return () => window.removeEventListener('scroll', handleNavShow);
  }, []);

  const handleLogoClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="sideNav">
      {showLogo && (
        <motion.img
          className="sideNav-logo"
          src={logo}
          alt="logo"
          variants={logoSideBar}
          onClick={handleLogoClick}
        />
      )}
      <div className="sideNav__para">
        {showPara && (
          <motion.p variants={heroTitle}>Developer who can Design</motion.p>
        )}
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div className="sideNav__socials">
        <motion.img
          variants={heroTitle}
          src={linkedin}
          alt="linkedin"
          className="sideNav__socials-ic"
          onClick={handleLinkedin}
        />
        <motion.img
          variants={heroTitle}
          src={github}
          alt="github"
          className="sideNav__socials-ic"
          onClick={handleGit}
        />
        <motion.img
          variants={heroTitle}
          src={instagram}
          alt="instagram"
          className="sideNav__socials-ic"
          onClick={handleInstagram}
        />
        <motion.img
          variants={heroTitle}
          src={email}
          alt="email"
          className="sideNav__socials-ic ic-mail"
          onClick={handleEmail}
        />
      </div>
    </div>
  );
}

export default SideNav;
