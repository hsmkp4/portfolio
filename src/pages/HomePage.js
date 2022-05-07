import React, { useState } from "react";
import HeroSec from "../components/HeroSec";
import LoadingLogo from "../components/LoadingLogo";
import Nav from "../components/Nav";
import SideNav from "../components/SideNav";
import mySites from "../util";
import SitesDetail from "../components/SitesDetail";
import { motion } from "framer-motion";
import { pageAnimate } from "../animate";

function HomePage({ loadingPage, setLoadingPage }) {
  const [sites, setSites] = useState(mySites);

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
            <div>
              <p
                style={{
                  marginTop: "8rem",
                  fontFamily: "Shadows Into Light",
                  color: "white",
                  marginLeft: "1rem",
                  marginBottom: "1rem",
                  fontWeight: 400,
                  fontSize: ".8rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Design and Developed by ME, 2021
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
