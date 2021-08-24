import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router';
import './css/app.css';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="app">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
