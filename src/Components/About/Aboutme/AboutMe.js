import React from "react";
import "./AboutMe.css";

import SimpleInfoBox from "./SimpleInfoBox/SimpleInfoBox";
import infoProfile from "./SimpleInfoBox/Data/infoProfile";

const AboutMe = () => {
  return (
    <div className="Profile-Container">
      <div className="subprofilecontainer">
        <div className="cvs-container">
          <a className="myCV-download" href="./ENG-CVEricMuriel.pdf" download>
            <img className="imgdwnlCV" src="./downloadmycv.png" alt=""></img>
          </a>

          <a href="./CastellanoCVEricMuriel.pdf" download>
            <img className="imgdwnlCV" src="./descargamicv.png" alt=""></img>
          </a>
        </div>

        <div className="titulo">
          <h1 className="iam">WHO I AM? WHAT ARE MY SKILLS?</h1>
        </div>

        <div className="whoiam-container">
          {infoProfile.map((infoBox) => (
            <SimpleInfoBox
              key={infoBox.id}
              image={infoBox.image}
              text={infoBox.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
