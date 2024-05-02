import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchBtn, setSearchBtn] = useState(false);
  const [data, setData] = useState("");

  const handleSetSearchBtn = () => {
    setSearchBtn(!searchBtn);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="navbar-wrapper">
        <div className="navbar-content">
          <h2>
            <span>JUSTIN</span> MOVIE
          </h2>
          {/* <img src="./assets/images/justinlogo.png" alt="logo" /> */}
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

            <li>
              <Link to="" className="menu-item">
                |
              </Link>
            </li>
            <li>
              <input
                onChange={(e) => {
                  setData(e.target.value);
                }}
                value={data}
                type="text"
                placeholder="search..."
              />
            </li>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
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
