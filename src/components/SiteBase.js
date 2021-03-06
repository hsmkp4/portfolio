import React from 'react';
import '../css/SiteBase.css';
import { motion, useAnimation } from 'framer-motion';
import { imageCome, compoCome } from '../animate';
import { useInView } from 'react-intersection-observer';

function SiteBase({ site }) {
  const control = useAnimation();
  const [element, view] = useInView();
  if (view) {
    control.start('show');
  } else {
    control.start('hidden');
  }

  // console.log(view);
  const handleGotoSite = () => {
    const url = site.url;
    window.open(url, '_blank');
  };
  return (
    <div className="site-page">
      <motion.div
        ref={element}
        variants={compoCome}
        animate={control}
        className="siteBase"
      >
        <div className="siteBase__para">
          <motion.h2 variants={imageCome} onClick={handleGotoSite}>
            {site.name}
          </motion.h2>

          <motion.h3 variants={imageCome} style={{ color: 'red' }}>
            {site.warn}
          </motion.h3>
          <motion.h3 variants={imageCome}>{site.description}</motion.h3>
        </div>
        <div className="siteBase__img-wrap">
          <motion.img
            src={site.img}
            alt="whateever"
            variants={imageCome}
            className="siteBase__img-img"
            onClick={handleGotoSite}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default SiteBase;
