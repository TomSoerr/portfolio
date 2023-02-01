import React from "react";
import { Link } from "react-router-dom";
import WritingEffect from "../Effects/WritingEffect";

function LandingPage(props) {
  return (
    <main className="hero">
      <h1 className="hero-title">
        <WritingEffect text={"Landing Page"}></WritingEffect>
      </h1>
      <Link to="/projects">Schaue dir meine Projekte an</Link>
      <br />
      <Link to="/contact">Kontaktiere mich</Link>
    </main>
  );
}

export default LandingPage;
