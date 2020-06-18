import React from "react";
import "./Header.css";

import EricImage from "./EricImage/EricImage";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-Container">
        <div>
          <EricImage />
        </div>
        <div className="EricMuriel">
          <h1 className="ericTitle">ERIC MURIEL</h1>
          <h4 className="subtitleheader">
            PROGRAMMER || GAME DEVELOPER || TECHNICAL ARTIST
          </h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
