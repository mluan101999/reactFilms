import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";
import { toast } from "react-toastify";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const notify = (message) => toast(message);
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
          <li onClick={() => notify("Justin đang phát triển tính năng này!")}>
            <Link to="/" className="menu-item">
              Login
            </Link>
          </li>
          <li onClick={() => notify("Justin đang phát triển tính năng này!")}>
            <Link to="/" className="menu-item">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
