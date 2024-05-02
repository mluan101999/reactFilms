import React, { createContext, useEffect, useState } from "react";
import { getDetailFilm } from "../components/Axios/NewFilm";

// Tạo một context mới
const FilmContext = createContext();

// Component cung cấp context
const GlobalFilmProvider = ({ children }) => {
  const [filmDetail, setFilmDetail] = useState({});
  const [link, setLink] = useState({
    file_name: "",
    link_embed: "",
  });
  const [film, setFilm] = useState({
    country: "",
    view: "",
    quality: "",
    time: "",
    lang: "",
    content: "",
  });

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
    setLink({
      file_name: respon[0].server_data[0].filename,
      link_embed: respon[0].server_data[0].link_embed,
    });
  };
  return (
    <FilmContext.Provider
      value={{
        film,
        filmDetail,
        link,
        handleSetFilmDetail,
        handleSetLink,
      }}
    >
      {children}
    </FilmContext.Provider>
  );
};
export { FilmContext, GlobalFilmProvider };
