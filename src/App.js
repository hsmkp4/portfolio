import HeroSec from './components/HeroSec';
import Nav from './components/Nav';
import SideNav from './components/SideNav';
import './css/app.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <HeroSec />
      <SideNav />
    </div>
  );
}

export default App;
