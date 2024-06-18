import { Component } from "react";

class Banner extends Component {
  state = {};
  render() {
    return <div className="banner">{this.props.title}</div>;
  }
}

export default Banner;
