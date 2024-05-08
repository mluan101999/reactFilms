import React, { useState, useContext } from "react";
import "./SearchFilm.css";
import { FilmContext } from "../../context/GlobalFIlm";
import { findFilm } from "../Axios/NewFilm";
import { useNavigate, useParams } from "react-router-dom";

const SearchFilm = () => {
  const { data, setData, setFindFilms } = useContext(FilmContext);
  const navigate = useNavigate();
  let { slug } = useParams();
  const handleFindFilm = async (value) => {
    // navigate(`/search/${data}`);
    setData(value);
    if (value === "") {
      setData("");
      setFindFilms([]);
    } else {
      try {
        const res = await findFilm(value, 100);
        setFindFilms(res.data.data.items);
      } catch (error) {}
    }
  };
  return (
    <div className="search-film-container">
      <div className="search-film-border">
        <input
          onChange={(e) => {
            handleFindFilm(e.target.value);
          }}
          value={data}
          type="text"
          placeholder="Ví dụ: Lat mat 7,..."
        />
        <i
          className={`fa-solid fa-xmark ${
            data === "" ? "hide-delete" : "show-delete"
          }`}
          onClick={() => {
            setFindFilms([]);
            setData("");
          }}
        ></i>
      </div>
    </div>
  );
};

export default SearchFilm;
