import music from '../src/img/pic1.png';
import job from '../src/img/picjob.png';
import country from '../src/img/piccountry.png';
import netflix from '../src/img/pic2.png';

const sites = [
  {
    name: 'Job Finder',
    url: 'https://jabjobjib.netlify.app/',
    description: ` This is the job finding site with bunch of dropdowns to help us find best job. For this project, I get data from the muse API and show it with custom hook and axios in UI.you can change API parameters with changing search inputs. Hope you can find your dream job.GL. `,
    id: 1,
    img: job,
  },
  {
    name: 'Music Services',
    url: 'https://chill-songs.netlify.app/',
    description: `In this project I tried to use only states and props to solve problems. You can pick one music to play, if you don't like it, go to the library and change it. For the Ui we have a minimal and clean looking page with a responsive design. `,
    id: 2,
    img: music,
  },
  {
    name: 'Netflix clone',
    url: 'https://netflix-clone-bb.netlify.app/',
    warn: 'you need VPN for this project',
    description: `Netflix Clone as its name shows, I tried to simulate that site and in this project I used react-router and redux to make it functional. For the backend I used firebase database and API is from TMDB. `,
    id: 3,
    img: netflix,
  },
  {
    name: 'Country Picker',
    url: 'https://country-pick.netlify.app/',
    description: `Find your country is sites for searching and learning about your world.in this work, I get data from API and putting search box and select tag for filtering countries. You can find more detail about your country to click more option in cards and site move you to another route to show you more. `,
    id: 4,
    img: country,
  },
];

export default sites;
