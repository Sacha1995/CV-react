import { Component } from "react";
import Button from "../Reusable-code/Button";
import IntroText from "./IntroText";

class Intro extends Component {
  state = {
    buttons: [
      { text: "Code", src: "https://github.com/Sacha1995" },
      { text: "LinkedIn", src: "https://linkedIn.com" },
      { text: "Projects", src: "https://github.com/Sacha1995" },
      { text: "Education", src: "https://github.com/Sacha1995" },
      { text: "Experience", src: "https://github.com/Sacha1995" },
      { text: "email", src: "mailto:sacha-u@hotmail.com" },
    ],
  };

  render() {
    const { buttons } = this.state;
    return (
      <div className="containerIntro">
        <IntroText />
        <div className="containerButtons">
          {buttons.map((button) => {
            return <Button buttonText={button.text} src={button.src} />;
          })}
        </div>
      </div>
    );
  }
}

export default Intro;
