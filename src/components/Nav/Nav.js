import React from "react";
import NavLink from "./NavItem";
import "./Nav.css";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <nav id="nav">
      <Logo />
      <ul>
        <NavLink
          className={location.pathname === "/" ? "nav-active" : ""}
          name="Home"
          url=""
        />
        <NavLink
          className={location.pathname === "/projects" ? "nav-active" : ""}
          name="Projekte"
          url="projects"
        />
        <NavLink
          className={location.pathname === "/contact" ? "nav-active" : ""}
          name="Kontakt"
          url="contact"
        />
      </ul>
    </nav>
  );
}

export default Nav;
