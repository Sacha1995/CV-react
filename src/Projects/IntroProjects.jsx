import { Component } from "react";

class IntroProjects extends Component {
  state = {};
  render() {
    return (
      <div className="outerContainerIntroProjects">
        <div className="innerContainerIntroProjects">
          <h2>What I have created</h2>
          <p className="quote">
            <q>
              I have never tried that before, so I think I should definitely be
              able to do that.
            </q>{" "}
            <br />- Pippi Longstocking
          </p>
        </div>
      </div>
    );
  }
}

export default IntroProjects;
