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
              New Movie
            </Link>
          </li>
          <li>
            <Link to="/trending" className="menu-item">
              Trending
            </Link>
          </li>
          <li>
            <Link to="" className="menu-item">
              Mavel
            </Link>
          </li>
          <li>
            <Link to="" className="menu-item">
              Phim Việt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
