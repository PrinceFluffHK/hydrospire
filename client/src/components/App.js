import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import TopBar from "./layout/TopBar";
import HomePage from "./HomePage";
import Team from "./Team";
import Founders from "./Founders";
import Contact from "./Contact";
import BottomBar from "./layout/BottomBar";

const App = (props) => {
  return (
    <div className="app">
      <Router>
        <TopBar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <BottomBar/>
      </Router>
    </div>
  );
};

export default hot(App);
