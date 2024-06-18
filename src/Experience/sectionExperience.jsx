import { Component } from "react";
import OrderedList from "../Reusable-code/OrderedList";

class SectionExperience extends Component {
  state = {
    education: [
      {
        title: "Primary school teacher, year 2",
        years: "August 2022 - December 2023",
        description: "De Meander, Curaçao",
      },
      {
        title: "Primary school teacher/maths coordinator, year 3 & 4",
        years: "2017 - 2019",
        description: "Annie M.G. Schmidtschool, The Hague",
      },
      {
        title:
          "Primary school teacher/behaviour coordinator, year 6 & reception",
        years: "October 2017 - July 2020",
        description: "OBS Voordorp, Utrecht",
      },
      {
        title: "Primary school teacher, year 5",
        years: "September 20187 - July 2018",
        description: "ODBS Pieterskerkhof, Utrecht",
      },
      {
        title: "Childcare, Tinies, Brighton (UK)",
        years: "May 2017 - August 2017",
        description:
          "During my time at Tinies I worked as a supply teacher in childcare. I would organise the day care for children from 3 months up to 4 years old at different organisations. In this role I helped organise activities, supervise the children and provide meals.",
      },
      {
        title: "Volunteer, Special Needs School Downs View, Brighton (UK)",
        years: "January 2017 - April 2017",
        description:
          "I volunteered in a class with severely autistic children to gain experience in special education.",
      },
      {
        title:
          "Volunteer, reception, Primary School Saint Lukes, Brighton (UK)",
        years: "October 2016 - April 2017",
        description:
          "During my gap year I wanted to experience primary education in England. This is why I volunteered in reception at Saint Lukes for three days a week. Here I fulfilled similar tasks as those of a teaching assistant. I organized activities, took tests, made observations, guided the students and helped the teachers prepare and evaluate lessons.",
      },
    ],
  };
  render() {
    const { education } = this.state;
    return (
      <div className="EducationSection">
        <div className="containerText">
          <ol>
            {education.map((education) => {
              const { title, years, description } = education;
              return (
                <OrderedList
                  title={title}
                  years={years}
                  description={description}
                />
              );
            })}
          </ol>
        </div>
        <div className="containerPicture">
          <img src={this.props.imgSrc} alt={this.props.imgAlt} />
        </div>
      </div>
    );
  }
}

export default SectionExperience;
