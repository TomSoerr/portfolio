import React from "react";
import NavLink from "./NavItem";
import "./Nav.css";
import Logo from "./Logo";

function Nav() {
  return (
    <nav id="nav">
      <Logo />
      <ul>
        <NavLink name="Home" url="" />
        <NavLink name="Projekte" url="projects" />
        <NavLink name="Kontakt" url="contact" />
      </ul>
    </nav>
  );
}

export default Nav;
