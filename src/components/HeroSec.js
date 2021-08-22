import React from 'react';
import '../css/heroSec.css';
import logo from '../img/logo-haa.svg';

function HeroSec() {
  return (
    <div className="heroSec">
      <div className="heroSec__describ">
        <img src={logo} alt="logo" />
        <h1>Frontend Developer</h1>
        <p>
          Hi, I am <span>Hesam</span>, a frontend developer who is a specialist
          on <span>React</span> and JavaScript, also I have graphic design
          background and I know a lot of CSS tricks!. I can help you to improve
          your business with <span>modern websites</span>.
        </p>
        <div className="glow__right"></div>
        <div className="glow__left"></div>
        <div className="glow1"></div>
        <div className="glow__all"></div>
      </div>
    </div>
  );
}

export default HeroSec;
