import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-Container">
        <div className="EricMuriel">
          <h1>ERIC MURIEL</h1>
        </div>

        <ul className="Nav-Menu">
          <li className="Nav-options">
            <a className="Header-menu" href="@">
              <h4>PORTFOLIO</h4>
            </a>
          </li>

          <li className="Nav-options">
            <a className="Header-menu" href="@">
              <h4>ABOUT</h4>
            </a>
          </li>

          <li className="Nav-options">
            <a className="Header-menu" href="@">
              <h4>STUDIES</h4>
            </a>
          </li>
          <li className="Nav-options">
            <a className="Header-menu" href="@">
              <h4>CONTACT</h4>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
