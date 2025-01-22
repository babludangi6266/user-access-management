import React from "react";
import image from "../assets/logo.png"
import profileimg from "../assets/profileimg.jpg"
import "../styles/Header.css";
import { FaBars, FaSearch, FaBell, FaPlus, FaCaretDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      {/* First Line */}
      <div className="header-top">
        <div className="header-left">
          <img
            src={image}
            alt="Profile"
            className="company-logo"
          />
        </div>
        <div className="header-box">
  <div className="header-center">
    <span className="record-id">Record ID</span>
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Enter search value"
        className="search-bar"
      />
    </div>
  </div>
</div>
        <div className="header-right">
        <FaBell className="notification-icon" />
          <img
            src={profileimg}
            alt="Company Logo"
            className="profile-img"
          />
        </div>
      </div>

      {/* Second Line */}
      <div className="header-bottom">
        <FaBars className="hamburger-icon" />
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#learn">My Learnings</a>
          <a href="#documents">Document Actions
          <FaCaretDown className="dropdown-icon" />
          </a>
          <a href="#quality">Quality Management</a>
          <a href="#risk">
            Risk Management <FaCaretDown className="dropdown-icon" />
          </a>
        </nav>
        <button className="create-record-btn">
          <FaPlus /> Create Record
        </button>
      </div>
    </div>
  );
};

export default Header;
