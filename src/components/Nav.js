import React from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <h2 className="nav__name">Hesam A.Amiri</h2>
      <div className="nav__details">
        <h3>
          <Link to="/about">About</Link>
        </h3>
        <h3>Works</h3>
        <h3>
          <Link to="contact">Contact</Link>
        </h3>
      </div>
    </div>
  );
}

export default Nav;
