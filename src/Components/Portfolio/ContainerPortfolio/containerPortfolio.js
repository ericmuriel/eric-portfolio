import React from "react";
import "./ContainerPortfolio.css";

const ContainerPortfolio = ({ image, url }) => {
  return (
    <div>
      <a href={url}>
        <img className="portmuestra" src={image} alt=""></img>
      </a>
    </div>
  );
};

export default ContainerPortfolio;
