import { Component } from "react";
import IntroProjects from "./IntroProjects";
import SectionProjects from "./SectionProjects";

class Projects extends Component {
  state = {
    projects: [
      {
        title: "Weather Website",
        sectionName: "WeatherWebsite",
        description: "I made a weather Website.",
        srcWebsite: "www.google.com",
        srcGithub: "www.google.com",
        imgSrc: "./free-website-builder.png",
        imgAlt: "An image",
        technologies: ["css", "API-calling", "Javascript", "HTML"],
      },
      {
        title: "Homage Piece",
        sectionName: "HomagePiece",
        description: "I made a copy of the homepage of Third space learning.",
        srcWebsite: "www.google.com",
        srcGithub: "www.google.com",
        imgSrc: "./free-website-builder.png",
        imgAlt: "An image",
        technologies: ["css", "HTML"],
      },
      {
        title: "Traffic Light",
        sectionName: "trafficLight",
        description: "I made a working traffic light with different sequences.",
        srcWebsite: "www.google.com",
        srcGithub: "www.google.com",
        imgSrc: "./free-website-builder.png",
        imgAlt: "An image",
        technologies: ["css", "Javascript", "HTML"],
      },
      {
        title: "Other skills/technologies",
        sectionName: "skills",
        description:
          "Next to these projects I have also worked/experimented with other technologies",
        srcWebsite: "www.google.com",
        srcGithub: "www.google.com",
        imgSrc: "./free-website-builder.png",
        imgAlt: "An image",
        technologies: [
          "Bootstrap",
          "TailWind",
          "Bulma",
          "Git",
          "Date-FNS",
          "Joi",
        ],
      },
    ],
  };

  render() {
    const { projects } = this.state;
    return (
      <>
        <IntroProjects />
        <div className="projects">
          {projects.map((project) => {
            const {
              title,
              sectionName,
              description,
              srcWebsite,
              srcGithub,
              // imgAlt,
              // imgSrc,
              technologies,
            } = project;
            return (
              <SectionProjects
                title={title}
                sectionName={sectionName}
                sectionName2="insideSectionProject"
                description={description}
                srcWebsite={srcWebsite}
                srcGithub={srcGithub}
                // imgAlt={imgAlt}
                // imgSrc={imgSrc}
                technologies={technologies}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Projects;
