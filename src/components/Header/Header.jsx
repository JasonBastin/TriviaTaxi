import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <div className="header">
      <div className="title-header">
        <Link to="/Home" className="link">
          <div className="title-container">
            <span className="title-start">T</span>
            <span className="title-end">RIVIA</span>{" "}
            <span className="title-start">T</span>
            <span className="title-end">AXI</span>
          </div>
        </Link>

        <div className="taxi-graphic-1"></div>
        <div className="taxi-graphic-2"></div>
      </div>
    </div>
  );
}

export default Header;
