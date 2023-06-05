import React from "react";
import "../styles/Navbar.css";
import NeoFi_logo from "../assets/NeoFi.png";
import VectorUp from "../assets/Vector 443.png";
import VectorDown from "../assets/Vector 444.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-pic">
          <img src={VectorUp} alt="" />
          <img src={VectorDown} alt="" />
        </div>
        <img className="logo-text" src={NeoFi_logo} alt="" />
      </div>
      <div className="menu">
        <div id="trade" className="menu-items">
          Trade
        </div>
        <div className="menu-items">Earn</div>
        <div className="menu-items">Support</div>
        <div className="menu-items">About</div>
      </div>
      <div className="button" id="connectwallet">
        Connect wallet
      </div>
    </div>
  );
};

export default Navbar;
