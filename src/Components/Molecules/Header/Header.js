import React from "react";
import "./Header.css";
import Image from "../../../Assets/Images/image.png";

const Header = () => {
  return (
    <div className="main-header-container">
      <img src={Image} alt="logo" className="header-image" />
      <div className="header-text">
        <div className="header-text-1">Your favourite tunes</div>
        <div className="header-text-2">All ☀️ and all 🌚</div>
      </div>
    </div>
  );
};

export default Header;
