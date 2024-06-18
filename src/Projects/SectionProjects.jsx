import { Component } from "react";
import Buttons from "../Reusable-code/Button";

class SectionProjects extends Component {
  state = {};
  render() {
    const technologies = this.props.technologies;
    return (
      <section className="outsideSectionProject">
        <div className={this.props.sectionName + " " + this.props.sectionName2}>
          <div className="containerText">
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <h4>Technologies</h4>
            <ul>
              {technologies.map((technology) => {
                return <li>{technology}</li>;
              })}
            </ul>
            <Buttons buttonText="Website" src={this.props.srcWebsite} />
            <Buttons buttonText="Github" src={this.props.srcGithub} />
          </div>

          <div className="containerPicture">
            {/* <img src={this.props.imgSrc} alt={this.props.imgAlt} /> */}
          </div>
        </div>
      </section>
    );
  }
}

export default SectionProjects;
