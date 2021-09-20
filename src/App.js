import HomePage from "./Pages/HomePage.js";
import AboutPage from "./Pages/AboutPage.js";
import PersonalPage from "./Pages/PersonalPage.js";
import ContactPage from "./Pages/ContactPage.js";
import Navbar from "./Components/Navbar.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <Navbar />
      <Route render={({ location }) => (
        <AnimatePresence initial={false} exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/personal">
              <PersonalPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </AnimatePresence>
      )} />
    </Router>

  );
}

export default App;
