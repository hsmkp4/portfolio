import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { fab } from '@fortawesome/free-solid-svg-icons';

function SideNav() {
  return (
    <div className="sideNav">
      <div className="sideNav__para">Developer who can Design!!</div>
      <div className="sideNav__socials">
        <FontAwesomeIcon icon={('fab', 'google')} />
      </div>
    </div>
  );
}

export default SideNav;
