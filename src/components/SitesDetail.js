import React from 'react';
import SiteBase from './SiteBase';
import '../css/SitesDetail.css';

function SitesDetail({ sites }) {
  return (
    <div className="siteDetail__wrap-top">
      <div className="siteDetail__wrap"></div>
      <div className="sitesDetail">
        {sites.map((s) => (
          <SiteBase site={s} key={s.id} />
        ))}
        <div className="sitesDetail__glow"></div>
      </div>
    </div>
  );
}

export default SitesDetail;
