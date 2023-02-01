import React, { Component } from "react";
import { Card } from "./Card.js";
import data from "./ProjectsData.js";
import "./Projects.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Meine Projekte</h1>
      <p className="hero-text">
        Hier findest du eine Auswahl meiner Projekte. Klicke auf "Mehr erfahren"
        um mehr über das Projekt zu erfahren.
      </p>
    </div>
  );
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = data;
  }

  render() {
    return (
      <div>
        <Hero />
        <article className="card-container">
          {[...this.state.projects].map((project, index) => {
            let name = project.name;
            let details = project.details;
            let image = project.image;
            let imageLink = project.imageLink;
            let icons = project.icons;
            let id = project.id;
            let moreDetails = project.moreDetails;
            return (
              <Card
                key={index}
                name={name}
                details={details}
                image={image}
                imageLink={imageLink}
                icons={icons}
                id={id}
                moreDetails={moreDetails}
              />
            );
          })}
        </article>
      </div>
    );
  }
}

export { Projects };
