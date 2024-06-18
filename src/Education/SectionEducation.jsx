import { Component } from "react";
import OrderedList from "../Reusable-code/OrderedList";

class SectionEducation extends Component {
  state = {
    education: [
      {
        title: "The Jump Software Engineer Bootcamp",
        years: "2024",
        description:
          "In 2024 I made the jump and descided to make a careerswitch from teacher to Software Engineer. This website showcases the many things that I have learned in my course.",
      },
      {
        title: "Master of Education",
        years: "2017 - 2019",
        description:
          "Master educational needs at the university of applied sciences, Utrecht. <br/> Specialisation behaviour. <br/> Specialisation learning.",
      },
      {
        title: "Bachelor of Education",
        years: "2012 - 2016",
        description:
          "'Fontys Hoge school Kind en Educatie' (Fontys Higher education children and education), s-Hertogenbosch. <br/> Minors: Experience abroad and physical education.",
      },
      {
        title: "Upper general secondary education",
        years: "2007 - 2012",
        description:
          "In the Netherlands called HAVO at the 'Titus Brandsma Lyceum', Oss.",
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

export default SectionEducation;
