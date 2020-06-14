import React from "react";
import "./SimpleInfoBox.css";

const SimpleInfoBox = ({ image, text }) => {
  return (
    <div>
      <div className="containText">
        <img className="icon-skill" src={image} alt=""></img>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default SimpleInfoBox;
