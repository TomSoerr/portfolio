import React from "react";
import NavItem from "./NavItem";
import "./Nav.css";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

function Nav(props) {
  const location = useLocation();

  return (
    <nav ref={props.navRef} id="nav">
      <Logo />
      <ul>
        <NavItem
          className={location.pathname === "/" ? "nav-active" : ""}
          name="Home"
          url=""
        />
        <NavItem
          className={location.pathname === "/projects" ? "nav-active" : ""}
          name="Projekte"
          url="projects"
        />
        <NavItem
          className={location.pathname === "/contact" ? "nav-active" : ""}
          name="Kontakt"
          url="contact"
        />
      </ul>
    </nav>
  );
}

export default Nav;
