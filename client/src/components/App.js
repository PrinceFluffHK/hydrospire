import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";
import TopBar from "./layout/TopBar";
import HomePage from "./HomePage";
import Team from "./Team";
import Contact from "./Contact";
import BottomBar from "./layout/BottomBar";
import IRI from "./About";

const App = (props) => {
  return (
    <div className="app">
      <Router>
        <TopBar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/iri" component={IRI} />
        </Switch>
        <BottomBar/>
      </Router>
    </div>
  );
};

export default hot(App);
