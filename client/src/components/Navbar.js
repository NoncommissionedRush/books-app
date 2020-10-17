import { logDOM } from "@testing-library/react";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        Prečítané knihy
      </a>
      <ul className="nav">
        <li>
          <NavLink
            exact
            to="/2018"
            onClick={(e) => props.navClick(e)}
            data-value="2018"
          >
            2018
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/2019"
            onClick={(e) => props.navClick(e)}
            data-value="2019"
          >
            2019
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/2020"
            onClick={(e) => props.navClick(e)}
            data-value="2020"
          >
            2020
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/"
            onClick={(e) => props.navClick(e)}
            data-value="all"
          >
            Všetko
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
