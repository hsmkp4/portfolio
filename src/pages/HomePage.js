import React, { useState } from 'react';
import HeroSec from '../components/HeroSec';
import LoadingLogo from '../components/LoadingLogo';
import Nav from '../components/Nav';
import SideNav from '../components/SideNav';
import mySites from '../util';
import SitesDetail from '../components/SitesDetail';
import { motion } from 'framer-motion';
import { pageAnimate } from '../animate';

function HomePage() {
  const [sites, setSites] = useState(mySites);
  const [loadingPage, setLoadingPage] = useState(true);

  // console.log(sites);
  return (
    <div className="homePage">
      {loadingPage ? (
        <LoadingLogo setLoadingPage={setLoadingPage} />
      ) : (
        <div>
          <Nav />
          <motion.div
            variants={pageAnimate}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <HeroSec />
            <SideNav />
            <SitesDetail sites={sites} />
            {/* <footer style={{ zIndex: 30, fontSize: '5rem' }}>
              ever try ever fail no matter try again fail again fail better
            </footer> */}
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
