import React from "react";
import "./AboutMe.css";
import SimpleInfoBox from "./SimpleInfoBox/SimpleInfoBox";
import infoProfile from "./SimpleInfoBox/Data/infoProfile";

const AboutMe = () => {
  return (
    <div className="Profile-Container">
      <div>
        <div className="titulo">
          <h1 className="whoiam">WHO I AM? WHAT ARE MY SKILLS?</h1>
          <a
            className="myCV-download"
            href="https://www.udemy.com/course/aprendiendo-react/learn/lecture/8500626#overview"
          >
            DOWNLOAD MY CV !
          </a>
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
