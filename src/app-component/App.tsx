import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../components/MainPage/MainPage";
import UserPage from "../components/UserPage/UserPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/user/:id" component={UserPage} />
      </Switch>
    </Router>
  );
}

export default App;
