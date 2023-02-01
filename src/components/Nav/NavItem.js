import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function NavItem(props) {
  return (
    <li>
      <Link to={`/${props.url}`}>{props.name}</Link>
    </li>
  );
}

export default NavItem;
