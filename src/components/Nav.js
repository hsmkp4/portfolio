import React from 'react';
import '../css/Nav.css';

function Nav() {
  return (
    <div className="nav">
      <h2 className="nav__name">Hesam A.Amiri</h2>
      <div className="nav__details">
        <h3>About</h3>
        <h3>Works</h3>
        <h3>Contact</h3>
      </div>
    </div>
  );
}

export default Nav;
