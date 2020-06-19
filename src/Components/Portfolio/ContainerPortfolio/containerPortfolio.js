import React from "react";

import "./ContainerPortfolio.css";

const ContainerPortflio = ({ image, url }) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="portmuestra" src={image} alt=""></img>
      </a>
    </div>
  );
};

export default ContainerPortfolio;
