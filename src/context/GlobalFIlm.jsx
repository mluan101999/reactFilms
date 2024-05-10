import React, { createContext, useEffect, useState } from "react";
import { getDetailFilm } from "../components/Axios/NewFilm";

const FilmContext = createContext();

const GlobalFilmProvider = ({ children }) => {
  const [filmDetail, setFilmDetail] = useState({});
  const [link, setLink] = useState({
    file_name: "",
    link_film: "",
  });
  const [film, setFilm] = useState({
    country: "",
    view: "",
    quality: "",
    time: "",
    lang: "",
    content: "",
  });
  const [singleFilms, setSingleFilm] = useState([]);
  const [seriesFilms, setSeriesFilm] = useState([]);
  const [animeFIlms, setAnimeFilm] = useState([]);
  const [tvShowFilms, setTvShowFilm] = useState([]);
  const [findFilms, setFindFilms] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const handleSetFilmDetail = (respon) => {
    setFilm({
      country: respon.country[0].name,
      view: respon.view,
      quality: respon.quality,
      time: respon.time,
      lang: respon.lang,
      content: respon.content,
    }); // show info film in NewFIlm Page
    setFilmDetail(respon); //show info film in watchFilm Page
  };
  const handleSetLink = (respon) => {
    respon.map((info) => {
      setLink({
        file_name: info.server_data[0].filename,
        link_film: info.server_data[0].link_m3u8,
      });
    });
  };
  return (
    <FilmContext.Provider
      value={{
        searchValue,
        findFilms,
        film,
        singleFilms,
        seriesFilms,
        animeFIlms,
        tvShowFilms,
        filmDetail,
        link,
        setSearchValue,
        handleSetFilmDetail,
        handleSetLink,
        setSingleFilm,
        setSeriesFilm,
        setAnimeFilm,
        setTvShowFilm,
        setFindFilms,
      }}
    >
      {children}
    </FilmContext.Provider>
  );
};
export { FilmContext, GlobalFilmProvider };
