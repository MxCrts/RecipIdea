import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "./Logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="pointer br3">
      <Tilt
        className="Tilt br4 bw1"
        options={{ max: 55 }}
        // style={{ height: "200px", width: "200px" }}
      >
        <div className="Tilt-inner br4 shadow-2 mt0  ">
          <img
            src={logo}
            alt="logo"
            // style={{ height: "200px", width: "200px" }}
          ></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
