import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimateSharedLayout } from 'framer-motion';
import React from 'react';
import { useHistory } from 'react-router';
import '../css/aboutSec.css';

import hes31 from '../img/hes31.svg';
import hes32 from '../img/hes32.svg';
import Toggle from './Toggle';

function AboutSec() {
  const history = useHistory();
  return (
    <div className="aboutSec">
      <h1 className="aboutSec__title">About</h1>
      <div>
        <img src={hes31} alt="hes" className="aboutSec__img" />
        {/* fill:#ce3534 */}
      </div>
      <div className="aboutSec__back">
        <h2 onClick={() => history.push('/')}>BACK</h2>
        <FontAwesomeIcon
          className="aboutSec__back-arrow"
          icon={faArrowRight}
          size="1x"
        />
      </div>
      <div className="about__wrapper">
        <AnimateSharedLayout>
          <div className="about__para">
            <Toggle title="What’s my definition of success?">
              <div className="about__para-question">
                <p>
                  Ever Try Ever Fail No Matter, Try Again Fail Again Fail
                  Better.
                </p>
              </div>
            </Toggle>
            <Toggle title="what are your side skills?">
              <div className="about__para-question">
                <p>
                  Architecture, logo design, video edit, music edit,
                  photography. And also sports!.
                </p>
              </div>
            </Toggle>
            <Toggle title="How do I want others to see me?">
              <div className="about__para-question">
                <p>Strong and positive.</p>
              </div>
            </Toggle>
            <Toggle title="What makes me sad?">
              <div className="about__para-question">
                <p>
                  I am sad when someone thinks he is smart and doing a bad thing
                  and also thinking I don't know what is going on!! This guy
                  forgot that I am smarter one :D
                </p>
              </div>
            </Toggle>
            <Toggle title="What type of person do I want to be?">
              <div className="about__para-question">
                <p>
                  Everyone can lean on me and say "we have great developer don't
                  worry, he can do it" it is so big but I wanna be this guy.
                </p>
              </div>
            </Toggle>
            <Toggle title="WHAT IS MY WHY?">
              <div className="about__para-question">
                <p>
                  Cause I love to build. What is better than websites, everyone
                  can sit on chairs and enjoy it.
                </p>
              </div>
            </Toggle>
            <Toggle title="What makes me happy?">
              <div className="about__para-question">
                <p>
                  I love to make unique website, I wanna learn and learn and
                  again learn how can I achieve this purpose, it so excited to
                  reach this level (I am laughing now for this sentence :D).
                </p>
              </div>
            </Toggle>
          </div>
          <div className="about__all">
            <Toggle title="What am I good at?">
              <div className="about__skill">
                <p>
                  HTML, CSS, Sass, Grid, JavaScript, Es6, Responsive Design,
                  React, Hooks, Router, Redux, Framer-motion, Git, npm, UX,
                  Blockchain{' '}
                </p>
              </div>
            </Toggle>
            <Toggle title="What am I want to learn?">
              <div className="about__road">
                <p>Typescript, NextJs, GatsbyJs, WebGl, ThreeJs, </p>
              </div>
            </Toggle>
          </div>
        </AnimateSharedLayout>
      </div>
    </div>
  );
}

export default AboutSec;
