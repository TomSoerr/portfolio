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
                platform: "Impressum",
                link: "https://tomsoerr.github.io/#/impressum",
              },
              {
                platform: "Kontakt",
                link: "https://tomsoerr.github.io/#/kontakt",
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
