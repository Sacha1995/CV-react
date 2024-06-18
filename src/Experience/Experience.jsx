import { Component } from "react";
import Banner from "../Reusable-code/Banner";
import SectionExperience from "./sectionExperience";

class Experience extends Component {
  state = {};
  render() {
    return (
      <section className="Experience">
        <Banner title="Experience" />
        <SectionExperience />
      </section>
    );
  }
}

export default Experience;
