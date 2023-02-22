import React from "react";
import "./FormPage.css";
import Hero from "../Hero/Hero.js";

const FormInput = (props) => {
  return (
    <label>
      {props.name}
      <input type="text" name={props.name.toLowerCase()} />
    </label>
  );
};

const FormTextArea = (props) => {
  return (
    <label>
      {props.name}
      <textarea name={props.name.toLowerCase()}></textarea>
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
          <form
            // action="https://webhook.site/1cf3fb6d-573b-4bd5-b7ea-4b97e4bed4a7"
            method="get"
            id="contact-form"
          >
            {[
              {
                name: "Name",
              },
              {
                name: "E-Mail",
              },
            ].map((input, index) => (
              <FormInput key={index} name={input.name} />
            ))}
            <FormTextArea name="Nachricht" />
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
