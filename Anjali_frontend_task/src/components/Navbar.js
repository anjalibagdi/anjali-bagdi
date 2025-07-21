import React from "react";
import { FaCrown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <FaCrown className="logo-icon" />
          <span>Landguru</span>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Advertise <MdKeyboardArrowDown className="nav-icon"/></li>
          <li>Supports <MdKeyboardArrowDown className="nav-icon"/></li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="try-btn">Try for Free</button>
    </nav>
  );
}
