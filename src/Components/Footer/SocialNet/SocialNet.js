import React from "react";

import "./SocialNet.css";

const SocialNet = ({ url, img }) => {
  return (
    <div className="socialnet">
      <a href={url}>
        <img src={img} width="60" alt=""></img>
      </a>
    </div>
  );
};

export default SocialNet;
