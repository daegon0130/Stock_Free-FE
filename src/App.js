import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Stock from "./pages/Stock";
import Sales from "./pages/Sales";

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" exact={true} component={Login} />
      <Route path="/" exact={true} component={Home} />
      <Route path="/sales" exat={true} component={Sales} />
      <Route path="/stock" exact={true} component={Stock} />
      <Route path="/upload" exact={true} component={Upload} />
    </BrowserRouter>
  );
}

export default App;
