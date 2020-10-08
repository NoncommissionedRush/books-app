import React from "react";

function Navbar(props) {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        Prečítané knihy
      </a>
      <ul className="nav">
        <li onClick={(e) => props.onClick(e)} data-value="2018">
          2018
        </li>
        <li onClick={(e) => props.onClick(e)} data-value="2019">
          2019
        </li>
        <li onClick={(e) => props.onClick(e)} data-value="2020">
          2020
        </li>
        <li onClick={(e) => props.onClick(e)} data-value="all">
          Všetko
        </li>
        <li>{props.value}</li>
      </ul>
    </header>
  );
}

export default Navbar;
