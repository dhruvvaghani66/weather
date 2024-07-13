import React, { useState } from "react";
import "./Navbar.css";
import nav_logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={nav_logo} alt="Logo" />
      </div>

      <ul className={showMenu ? "navbar-tabs show" : "navbar-tabs"}>
        <li>
          <Link
            to="/"
            className={activeTab === "Home" ? "active" : ""}
            onClick={() => handleTabClick("Home")}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/climate-change"
            className={activeTab === "Climate Change" ? "active" : ""}
            onClick={() => handleTabClick("Climate Change")}
          >
            Climate Change
          </Link>
        </li>
        <li>
          <Link
            to="/news"
            className={activeTab === "News" ? "active" : ""}
            onClick={() => handleTabClick("News")}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            to="/map"
            className={activeTab === "Map" ? "active" : ""}
            onClick={() => handleTabClick("Map")}
          >
            Map
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className={activeTab === "Gallery" ? "active" : ""}
            onClick={() => handleTabClick("Gallery")}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activeTab === "Contact" ? "active" : ""}
            onClick={() => handleTabClick("Contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
