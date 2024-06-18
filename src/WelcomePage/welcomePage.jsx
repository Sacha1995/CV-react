import React, { Component } from "react";
import Intro from "./Intro";

class WelcomePage extends Component {
  state = {};
  render() {
    return (
      <div className="containerWelcomePage">
        <Intro />
      </div>
    );
  }
}

export default WelcomePage;
