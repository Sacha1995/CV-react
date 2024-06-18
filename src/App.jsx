import { Component } from "react";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Intro from "./WelcomePage/welcomePage";

class App extends Component {
  render() {
    return (
      <>
        <Intro />
        <Projects />
        <Education />
        <Experience />
      </>
    );
  }
}

export default App;
