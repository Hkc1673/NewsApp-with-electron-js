import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import "./index.css";
import App from "./App";
import Detail from "./components/Detail"
import { Provider } from "react-redux";
import { store } from "./store";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/detail/:index">
          <Detail />
        </Route>
        </Switch>
      </Router>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
