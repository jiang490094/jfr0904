import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React from "react";

import MainContent from "./components/common/MainContent";
import OpeningPage from "./components/OpeningPage";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Autobiography  from "./components/Autobiography";
import AutobiographyEN  from "./components/AutobiographyEN";

function App(props) {
  
  return (
    <Router>
      <>
        <MainContent>
          <Switch>
            <Route exact path="/jfr0904">
              <OpeningPage />
            </Route>
            <Route path="/jfr0904/AboutMe">
              <AboutMe />
            </Route>
            <Route path="/jfr0904/Portfolio">
              <Portfolio />
            </Route>
            <Route path="/jfr0904/Resume">
              <Resume />
            </Route>
            <Route path="/jfr0904/Contact">
              <Contact />
            </Route>
            <Route path="/jfr0904/Autobiography">
              <Autobiography />
            </Route>
            <Route path="/jfr0904/AutobiographyEN">
              <AutobiographyEN />
            </Route>
          </Switch>
        </MainContent>
      </>
    </Router>
  );
}

export default App;
