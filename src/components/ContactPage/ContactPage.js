import React from "react";
import WritingEffect from "../Effects/WritingEffect";

function ContactPage(props) {
  return (
    <main className="hero">
      <h1 className="hero-title">
        <WritingEffect text={"Kontakt Seite"}></WritingEffect>
      </h1>
      <table>
        <thead>
          <tr>
            <th>Information</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Email</td>
            <td>example@email.com</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>(123) 456-7890</td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td>github.com/example</td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td>@example</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default ContactPage;
