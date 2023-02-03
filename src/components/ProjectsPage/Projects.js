import React, { Component } from "react";
import { Card } from "./Card.js";
import data from "./ProjectsData.js";
import "./Projects.css";
import WritingEffect from "../Effects/WritingEffect.js";
import "../Footer/Footer.js";
import Footer from "../Footer/Footer.js";

const Hero = () => {
  return (
    <div>
      <img alt="Background" className="background" src="/img/test2.svg"></img>
      <header className="hero">
        <h1 className="hero-text">
          <WritingEffect text={"Meine Projekte"}></WritingEffect>
        </h1>
      </header>
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
      <main>
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
        <Footer></Footer>
      </main>
    );
  }
}

export default Projects;
