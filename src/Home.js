import React from "react";
import axios from "axios";
import "./Home.css";
import Navi from './Navi'

class Home extends React.Component {
  render() {
    return (
      <section className="container">
          <Navi />
      </section>
    );
  }
}

export default Home;