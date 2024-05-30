import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import SearchFilm from "../SearchFilm/SearchFilm";
import { toast } from "react-toastify";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchBtn, setSearchBtn] = useState(false);
  const navigate = useNavigate();
  const handleSetSearchBtn = () => {
    setSearchBtn(!searchBtn);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const hanldeReloadPage = () => {
    navigate("/");
  };
  const notify = (message) => toast(message);

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="navbar-wrapper">
        <div className="navbar-content">
          <h2 onClick={() => hanldeReloadPage()}>
            <span>LUAN</span> MOVIE
          </h2>
          {/* <img src="./assets/images/justinlogo.png" alt="logo" /> */}
          <ul>
            <li className="navbar-search-input">
              <SearchFilm />
            </li>
            <li className="navbar-mobile-hide">|</li>
            <li
              className="navbar-mobile-hide"
              onClick={() => notify("Admin đang phát triển tính năng này!")}
            >
              <Link to="/" className="menu-item">
                Favourite
              </Link>
            </li>
            <li
              className="navbar-mobile-hide"
              // onClick={() => notify("Justin đang phát triển tính năng này!")}
            >
              <Link to="/login" className="menu-item">
                Login
              </Link>
            </li>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
