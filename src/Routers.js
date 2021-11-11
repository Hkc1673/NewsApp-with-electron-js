import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Main from "./components/Main";
import Detail from "./components/Detail";

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/detail/:index">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routers;
