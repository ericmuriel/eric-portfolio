import React from "react";
import "./Portfolio.css";

import ContainerPortfolio from "./ContainerPortfolio/ContainerPortfolio";

import dataPortfolio from "./ContainerPortfolio/Data/DataPortfolio";

const Portfolio = () => {
  return (
    <div>
      <div className="Portfolio">
        <h1 className="titlePortfolio">PORTFOLIO && COURSES </h1>
      </div>

      <div className="container-info">
        <div>
          <div className="expoPortfolio">
            {dataPortfolio.map((data) => (
              <ContainerPortfolio
                key={data.id}
                image={data.image}
                url={data.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
