import React from "react";

import SocialNet from "./SocialNet/SocialNet";

import dataFooter from "./SocialNet/DataFooter/dataFooter";

const Footer = () => {
  return (
    <div className="Footer">
      {dataFooter.map((socialdata) => (
        <SocialNet
          key={socialdata.id}
          url={socialdata.url}
          img={socialdata.img}
        />
      ))}
    </div>
  );
};

export default Footer;
