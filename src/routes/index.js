import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../components/Home";
import Details from "../components/Details";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  </Router>
);
