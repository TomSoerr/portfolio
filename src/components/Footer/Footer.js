import { Icon } from "../ProjectsPage/Card.js";
import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <Icon
        link="https://github.com/TomSoerr/"
        icon="/img/github-mark-white.svg"
        iconAlt="github icon"
      />
      <p className="footer-text">Tom Soerr 2023</p>
      <a
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          color: "black",
          backgroundColor: "white",
          fontSize: 16,
          fontFamily: "sans-serif",
          padding: 2,
          border: "thin solid black",
          textDecoration: "underline",
        }}
        href="https://tomsoerr.github.io/#/impressum"
      >
        Impressum
      </a>
      <span
        style={{
          zIndex: 1000,
          position: "fixed",
          bottom: 0,
          left: 0,
          color: "black",
          backgroundColor: "white",
          textDecoration: "none",
          fontSize: 16,
          fontFamily: "sans-serif",
          padding: 2,
          border: "thin solid black",
        }}
      >
        Keine kommerzielle Website, nur für Bildungszwecke.
      </span>
    </footer>
  );
};

export default Footer;
