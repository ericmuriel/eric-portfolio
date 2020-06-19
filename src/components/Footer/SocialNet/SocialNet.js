import React from "react";

import "./SocialNet.css";

const SocialNet = ({ url, img }) => {
  return (
    <div className="socialnet">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={img} width="60" className="imgsocialnet" alt=""></img>
      </a>
    </div>
  );
};

export default SocialNet;
