import React from "react";

function Navbar(props) {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        Prečítané knihy
      </a>
      <ul className="nav">
        <li>2018</li>
        <li>2019</li>
        <li>2020</li>
        <li>Všetko</li>
      </ul>
    </header>
  );
}

export default Navbar;
