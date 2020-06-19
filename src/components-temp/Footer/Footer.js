import React from "react";

import SocialNet from "./SocialNet/SocialNet";

import dataFooter from "./SocialNet/DataFooter/dataFooter";

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        {dataFooter.map((socialdata) => (
          <SocialNet
            key={socialdata.id}
            url={socialdata.url}
            img={socialdata.img}
          />
        ))}
      </div>

      <div className="copyright">
        <h3 className="titlecopyright">Copyright © Eric Muriel 2020</h3>
      </div>
    </div>
  );
};

export default Footer;
