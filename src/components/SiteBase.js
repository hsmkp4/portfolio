import React from 'react';
import '../css/SiteBase.css';
import { motion } from 'framer-motion';
import { imageCome } from '../animate';

function SiteBase({ site }) {
  console.log(site.name);
  return (
    <div classname="site-page">
      <div className="siteBase">
        <div className="siteBase__para">
          <h2>{site.name}</h2>
          <h3>{site.description}</h3>
        </div>
        <motion.img src={site.img} alt="whateever" variants={imageCome} />
      </div>
    </div>
  );
}

export default SiteBase;
