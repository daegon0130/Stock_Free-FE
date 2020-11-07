import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Stock from "./pages/Stock";
import Sales from "./pages/Sales";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/sales" exat={true} component={Sales}/>
      <Route path="/stock" exact={true} component={Stock} />
      <Route path="/upload" exact={true} component={Upload} />
      <Route path="/login" exact={true} component={Login} />
    </HashRouter>
  );
}

export default App;