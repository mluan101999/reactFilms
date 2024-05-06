import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { findFilm } from "../Axios/NewFilm";
import { FilmContext } from "../../context/GlobalFIlm";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchBtn, setSearchBtn] = useState(false);
  const [data, setData] = useState("");
  const { findFilms, setFindFilms } = useContext(FilmContext);

  const handleSetSearchBtn = () => {
    setSearchBtn(!searchBtn);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleFindFilm = async (value) => {
    setData(value);
    if (value === "") {
      setFindFilms([]);
    } else {
      try {
        const res = await findFilm(value, 100);
        setFindFilms(res.data.data.items);
      } catch (error) {}
    }
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
              <input
                onChange={(e) => {
                  handleFindFilm(e.target.value);
                }}
                value={data}
                type="text"
                placeholder="Ví dụ: Lat mat 7,..."
              />
            </li>
            <li className="nav-bar-item">
              <Link to="" className="menu-item">
                |
              </Link>
            </li>
            <li className="nav-bar-item">
              <Link to="/" className="menu-item">
                New Movie
              </Link>
            </li>
            <li className="nav-bar-item">
              <Link to="/trending" className="menu-item">
                Trending
              </Link>
            </li>
            {/* <li>
              <Link to="" className="menu-item">
                Mavel
              </Link>
            </li>
            <li>
              <Link to="" className="menu-item">
                Phim Việt
              </Link>
            </li> */}
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
