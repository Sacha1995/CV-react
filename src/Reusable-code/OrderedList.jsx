import { Component } from "react";

class OrderedList extends Component {
  state = {};
  render() {
    return (
      <li>
        <h4>{this.props.title}</h4>
        <p>{this.props.years}</p>
        <p>{this.props.description}</p>
      </li>
    );
  }
}

export default OrderedList;
