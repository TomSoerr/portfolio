import React, { Component } from "react";
import { Card } from "./Card.js";
import data from "./ProjectsData.js";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = data;
  }

  render() {
    return (
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
    );
  }
}

export { Projects };
