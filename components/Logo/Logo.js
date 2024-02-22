import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "./Logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0 center pointer">
      <Tilt
        className="Tilt br2  bw1"
        options={{ max: 55 }}
        style={{ height: "200px", width: "200px" }}
      >
        <div className="Tilt-inner shadow-2 mt0  ">
          <img
            src={logo}
            alt="logo"
            style={{ height: "200px", width: "200px" }}
          ></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
