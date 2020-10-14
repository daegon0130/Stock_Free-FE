import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Login from "./Login";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/Home">Home</Link>
      <Link to="/">Login</Link>
    </div>
  );
}

export default Navigation;