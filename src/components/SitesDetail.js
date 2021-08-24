import React from 'react';
import SiteBase from './SiteBase';
import '../css/SitesDetail.css';
import { motion } from 'framer-motion';
import { sitesCard } from '../animate';

function SitesDetail({ sites }) {
  return (
    <motion.div className="siteDetail__wrap-top">
      <div className="siteDetail__wrap"></div>
      <div className="sitesDetail">
        {sites.map((s) => (
          <SiteBase site={s} key={s.id} />
        ))}
        <div className="sitesDetail__glow"></div>
      </div>
    </motion.div>
  );
}

export default SitesDetail;
