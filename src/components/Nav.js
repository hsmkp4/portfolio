import React from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  const handleClickWorks = () => {
    window.scroll({
      top: 1000,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="nav">
      <h2 className="nav__name">Hesam A.Amiri</h2>
      <div className="nav__details">
        <h3>
          <Link className="nav__details-link" to="/about">
            About
          </Link>
        </h3>
        <h3 className="nav__details-link nav-hidden" onClick={handleClickWorks}>
          Works
        </h3>
        <h3>
          <Link className="nav__details-link" to="contact">
            Contact
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default Nav;
