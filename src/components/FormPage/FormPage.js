import React from "react";
import "./FormPage.css";
import Hero from "../Hero/Hero.js";

const FormInput = (props) => {
  return (
    <label>
      {props.name} *
      <input
        placeholder=" "
        pattern={props.pattern}
        required
        type={props.type}
        name={props.name.toLowerCase()}
        onInvalid={(e) => e.target.setCustomValidity(props.msg)}
        onInput={(e) => e.target.setCustomValidity("")}
        title={props.msg}
      />
      <span></span>
    </label>
  );
};

const FormTextArea = (props) => {
  return (
    <label>
      {props.name} *
      <textarea
        placeholder=" "
        required
        name={props.name.toLowerCase()}
        onInvalid={(e) => e.target.setCustomValidity(props.msg)}
        onInput={(e) => e.target.setCustomValidity("")}
        title={props.msg}
      ></textarea>
      <span></span>
    </label>
  );
};

const FormSubmitBtn = (props) => {
  return <button type="submit">{props.text}</button>;
};

const FormPage = (props) => {
  return (
    <main className="only-element">
      <Hero
        class="form"
        box={
          <form autoComplete="on" id="contact-form">
            <p>Pflichtfelder sind mit einem Sternchen (*) gekennzeichnet.</p>
            {[
              {
                name: "Name",
                pattern: "[a-zA-Z]{2,}",
                msg: "Bitte geben Sie einen gültigen Namen ohne Leerzeichen und Umlaute ein der mindestens zwei Buchstaben hat.",
                type: "text",
              },
              {
                name: "E-Mail",
                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
                msg: "Bitte geben Sie eine E-Mail ohne Leerzeichen, Großbuchstaben und Umlaute ein.",
                type: "email",
              },
            ].map((input, index) => (
              <FormInput
                msg={input.msg}
                key={index}
                name={input.name}
                pattern={input.pattern}
                type={input.type}
              />
            ))}
            <FormTextArea
              msg="Bitte geben sie ein Nachricht ein"
              name="Nachricht"
            />
            <FormSubmitBtn text="Absenden" />
          </form>
        }
        bgImg={3}
        onlyElement={true}
        headline="Kontakt"
      />
    </main>
  );
};

export default FormPage;
