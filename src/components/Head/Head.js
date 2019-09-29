import React from "react";
import "./Head.css";
import logo from "../../Img/Nasa.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt="Nasa's logo" />
    </div>
  );
};

export default Logo;
