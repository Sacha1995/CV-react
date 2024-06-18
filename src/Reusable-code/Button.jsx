import { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <>
        <a href={this.props.src}>
          <button className="btn">{this.props.buttonText}</button>
        </a>
      </>
    );
  }
}

export default Buttons;
