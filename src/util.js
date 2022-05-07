import music from "../src/img/pic1.png";
import job from "../src/img/picjob.png";
import tenzi from "../src/img/tenzi1.png";
import netflix from "../src/img/pic2.png";

const sites = [
  {
    name: "Tenzi Game",
    url: "https://tenzi-game.netlify.app/",
    description: ` 3d game base of dice game aka "TENZI", try to build immersive game with cool functionality to enjoy 3d UI. for reach this quality i used threejs and r3f and some basic glsl language for shaders. this project scaffolding with react.`,
    id: 1,
    img: tenzi,
  },
  {
    name: "Job Finder",
    url: "https://jabjobjib.netlify.app/",
    description: ` This is the job finding site with bunch of dropdowns to help us find best job. For this project, I get data from the muse API and show it with custom hook and axios in UI.you can change API parameters with changing search inputs. Hope you can find your dream job. `,
    id: 2,
    img: job,
  },
  {
    name: "Music Player",
    url: "https://chill-songs.netlify.app/",
    description: `In this project I tried to use only states and props to solve problems. You can pick one music to play, if you don't like it, go to the library and change it. For the Ui we have a minimal and clean looking page with a responsive design. `,
    id: 3,
    img: music,
  },
  {
    name: "Netflix clone",
    url: "https://netflix-clone-bb.netlify.app/",
    warn: "you need VPN for this project",
    description: `Netflix Clone as its name shows, I tried to simulate that site and in this project I used react-router and redux to make it functional. For the backend I used firebase database and API is from TMDB. `,
    id: 4,
    img: netflix,
  },
];

export default sites;
