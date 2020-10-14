import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Login from "./Login";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/Home" component={Home} />
      <Route path="/" exact={true} component={Login} />
    </HashRouter>
  );
}

export default App;