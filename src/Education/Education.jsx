import { Component } from "react";
import Banner from "../Reusable-code/Banner";
import SectionEducation from "./SectionEducation";

class Education extends Component {
  state = {};
  render() {
    return (
      <section className="Education">
        <Banner title="Education" />
        <SectionEducation />
      </section>
    );
  }
}

export default Education;
