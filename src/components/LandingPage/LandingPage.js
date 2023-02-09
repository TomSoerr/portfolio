import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero.js";
import Footer from "../Footer/Footer.js";
import "./LandingPage.css";

const Section = (props) => {
  return (
    <article
      className={`text-section ${props.className ? props.className : ""}`}
    >
      {props.children}
    </article>
  );
};

const LandingPage = (props) => {
  return (
    <main>
      <Hero headline="Willkommen! Lass uns gestalten." />
      <article id="scroll-to" className="landing-page">
        <Section>
          <h2>
            <span>Hi, ich bin Tom</span>, ein self-taught Front-End-Entwickler
            aus Hamburg.
          </h2>
        </Section>
        <Section>
          <h3>Über mich</h3>
          <p>
            Ich bin ein sicherer Front-End-Dev mit Schwerpunkt auf HTML/CSS. Ich
            habe auch gute Kenntnisse in JavaScript, Illustrator/InDesign und
            einen professionellen Workflow mit Git. Ich habe bereits mit ReactJS
            und Django gearbeitet und habe Basiswissen in Python, Photoshop,
            Netzwerktechnik und IT-Sicherheit. Außerdem bin ich erfahren im
            Umgang mit Unix Terminals. Ich bemühe mich stets, in jedem Projekt
            mein Bestes zu geben und sicherzustellen, dass meine Arbeit gut
            strukturiert ist.
          </p>
        </Section>
        <Section>
          <h3>Erfahren Sie mehr über meine Fähigkeiten und Projekte</h3>
          <Link className="button" to="/projects">
            Projekte
          </Link>
        </Section>
      </article>
      <Footer />
    </main>
  );
};

export default LandingPage;
