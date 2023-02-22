import React from "react";
import "./ContactPage.css";
import Hero from "../Hero/Hero.js";

const ContactElement = (props) => {
  return (
    <li>
      <a
        className="big-button"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.platform}
      </a>
    </li>
  );
};

const ContactPage = (props) => {
  return (
    <main className="only-element">
      <Hero
        bgImg={3}
        box={
          <ul className="contact-box">
            {[
              {
                platform: "Xing",
                link: "https://www.xing.com/profile/Tom_Soerr/cv",
              },
              {
                platform: "GitHub",
                link: "https://github.com/TomSoerr",
              },
              {
                platform: "LinkedIn",
                link: "https://www.linkedin.com/in/tom-soerr-b5707a265/",
              },
              {
                platform: "E-Mail",
                link: "mailto:tomix2004@gmail.com",
              },
            ].map((contact, index) => (
              <ContactElement
                key={index}
                platform={contact.platform}
                contact={contact.contact}
                link={contact.link}
              />
            ))}
          </ul>
        }
        onlyElement={true}
        headline="Kontaktieren Sie mich!"
      />
    </main>
  );
};

export default ContactPage;
