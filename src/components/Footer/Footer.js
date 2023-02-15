import { Icon } from "../ProjectsPage/Card.js";
import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <Icon
        link="https://www.linkedin.com/in/tom-soerr-b5707a265/"
        icon="./img/linkedin.svg"
        iconAlt="linkedin icon"
      />
      <Icon
        link="mailto:tomix2004@gmail.com"
        icon="./img/mail.svg"
        iconAlt="mail icon"
      />
      <Icon
        link="https://github.com/TomSoerr/"
        icon="./img/github-mark-white.svg"
        iconAlt="github icon"
      />
      <p className="footer-text">Tom Soerr © 2023</p>
    </footer>
  );
};

export default Footer;
