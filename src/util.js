import music from '../src/img/pic1.png';
import food from '../src/img/pic3.png';
import notebook from '../src/img/pic4.png';
import netflix from '../src/img/pic2.png';

const sites = [
  {
    name: 'Music Services',
    url: 'https://chill-songs.netlify.app/',
    description: `In this project I tried to use only states and props to solve problems. You can pick one music to play, if you don't like it, go to the library and change it. For the Ui we have a minimal and clean looking page with a responsive design. `,
    id: 1,
    img: music,
  },
  {
    name: 'Netflix clone',
    url: 'https://netflix-clone-bb.netlify.app/',
    warn: 'you need VPN for this site',
    description: `Netflix Clone as its name shows, I tried to simulate that site and in this project I used react-router and redux to make it functional. For the backend I used firebase database and API is from TMDB. `,
    id: 2,
    img: netflix,
  },
  {
    name: 'Order Food',
    url: 'https://ord3r-food.netlify.app/',
    description: ` Order your fav food but who's gonna deliver it to you?!. for this one i used most common hooks like useState, useRef, useEffect and for manage state i used Context to complete it. `,
    id: 3,
    img: food,
  },
  {
    name: 'Recipe Notebook',
    url: 'https://recipe-notebook.netlify.app',
    description: `If you are trying to cook new foods, or if you are a real noob in cooking, don't worry at least you are good at eating. Basic of react and styling used for this project for storing your data in local storage.`,
    id: 4,
    img: notebook,
  },
];

export default sites;
