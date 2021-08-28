import React, { useEffect, useRef, useState } from 'react';
import HeroSec from '../components/HeroSec';
import LoadingLogo from '../components/LoadingLogo';
import Nav from '../components/Nav';
import SideNav from '../components/SideNav';
import mySites from '../util';
import SitesDetail from '../components/SitesDetail';
import { motion } from 'framer-motion';
import { pageAnimate } from '../animate';

function HomePage({ loadingPage, setLoadingPage }) {
  const [sites, setSites] = useState(mySites);
  // const audioRef = useRef();

  // const audioUrl =
  //   'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-69838/zapsplat_sound_design_hit_kick_drum_hard_into_delayed_shrill_pads_70854.mp3';

  // useEffect(() => {
  //   let timer = setTimeout(async () => {
  //     await audioRef.current.play();
  //   }, 800);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

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
      {/* <audio ref={audioRef} src={boldDrum}></audio> */}
    </div>
  );
}

export default HomePage;
