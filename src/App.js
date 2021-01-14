import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React from "react";

import MainContent from "./components/common/MainContent";
import OpeningPage from "./components/OpeningPage";
import AboutMe from "./components/AboutMe";

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
          </Switch>
        </MainContent>
      </>
    </Router>
  );
}

export default App;
