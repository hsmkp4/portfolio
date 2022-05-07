import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
import linkW from "../img/1_link.svg";
import instW from "../img/1_inst.svg";
import gitW from "../img/1_git.svg";
import "../css/contactSec.css";

function ContactSection() {
  let newOne = useHistory();
  return (
    <div className="contactSec">
      <h1 className="contactSec__title">Contact</h1>
      <div className="contactSec__back">
        <h2 onClick={() => newOne.push("/")}>BACK</h2>
        <FontAwesomeIcon
          className="aboutSec__back-arrow"
          icon={faArrowRight}
          size="1x"
        />
      </div>
      <div className="contactSec__wrapper">
        <div className="contactSec__para">
          <h2>Where can I find you?</h2>
          <p>
            You can reach me in world wide web ( lol ). You can mail me at
            hesam.lfl@gmail.com or find me in social media (click on their pic).
            I hope you find me soon. Good Luck.
          </p>
        </div>
        <div className="contactSec__social">
          <img
            onClick={() =>
              window.open("https://www.linkedin.com/in/hsmkp4/", "_blank")
            }
            src={linkW}
            alt="linkedin"
          />
          <img
            onClick={() => window.open("https://github.com/hsmkp4", "_blank")}
            src={gitW}
            alt="github"
          />
          <img
            onClick={() =>
              window.open("https://www.instagram.com/blockitffs/", "_blank")
            }
            src={instW}
            alt="instagram"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
