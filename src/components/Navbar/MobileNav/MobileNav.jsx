import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <nav className="mobile-menu-container">
        <h2>
          <span>JUSTIN</span> MOVIE
        </h2>
        <ul>
          <li>
            <Link to="/" className="menu-item">
              Login
            </Link>
          </li>
          <li>
            <Link to="/trending" className="menu-item">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
