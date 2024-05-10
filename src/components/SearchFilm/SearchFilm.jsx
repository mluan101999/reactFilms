import React, { useEffect, useContext } from "react";
import "./SearchFilm.css";
import { FilmContext } from "../../context/GlobalFIlm";
import { findFilm } from "../Axios/NewFilm";
import useDebounce from "../../hook/useDebounce";

const SearchFilm = () => {
  const { searchValue, setSearchValue, setFindFilms } = useContext(FilmContext);
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  useEffect(() => {
    handleFindFilm(searchValue);
  }, [debouncedSearchValue]);
  const handleFindFilm = async (value) => {
    console.log(value);
    if (value === "") {
      setFindFilms([]);
    } else {
      try {
        const res = await findFilm(value, 100);
        setFindFilms(res.data.data.items);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="search-film-container">
      <div className="search-film-border">
        <input
          onInput={(e) => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
          type="text"
          placeholder="Ví dụ: Lat mat 7,..."
        />
        <i
          className={`fa-solid fa-xmark ${
            searchValue === "" ? "hide-delete" : "show-delete"
          }`}
          onClick={() => {
            setFindFilms([]);
            setSearchValue("");
          }}
        ></i>
      </div>
    </div>
  );
};

export default SearchFilm;
