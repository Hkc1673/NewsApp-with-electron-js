import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Main from "./components/Main";
import Detail from "./components/Detail";

function Routers() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/detail/:index">
          <Detail />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Routers;
