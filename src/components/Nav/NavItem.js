import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function NavItem(props) {
  return (
    <li>
      <Link className={props.className} to={`/${props.url}`}>
        <div>{props.name}</div>
      </Link>
    </li>
  );
}

export default NavItem;
