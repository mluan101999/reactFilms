import React, { useEffect, useState, useContext } from "react";
import "./NewFilm.css";
import ListFilm from "../ListFilm/ListFilm";
import { Link } from "react-router-dom";
import { getDetailFilm, getNewFilm } from "../Axios/NewFilm";
import { FilmContext } from "../../context/GlobalFIlm";

const NewFilm = () => {
  const [films, setFilms] = useState([]);

  const { film, handleSetFilmDetail, handleSetLink } = useContext(FilmContext);
  useEffect(() => {
    getFilm();
  }, []);
  const getFilm = async () => {
    try {
      const res = await getNewFilm();
      getDetailOneFilm(res.data.items[0].slug);
      setFilms(res.data.items);
    } catch (error) {
      console.error(error);
    }
  };
  const getDetailOneFilm = async (slug) => {
    try {
      const resp = await getDetailFilm(slug);
      handleSetFilmDetail(resp.data.movie);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="newfilm-container">
        <img src={films[0] && films[0].thumb_url} alt="background" />
        <div className="newfilm-content">
          <h5>{films[0] && films[0].name}</h5>
          <div className="content-info">
            <span>{film.country}</span>
            {} Views: {film.view} | {film.quality} | {film.time} | {film.lang}
          </div>
          <p>
            {film && film.content.substr(0, 150)}
            <span style={{ color: "yellow" }}>...See more</span>
          </p>

          <div className="newfilm-btn">
            <button className="watch-traller-btn">Watch traller</button>
            <button className="watch-now-btn">
              <Link to={`/watchFilm/${films[0] && films[0].slug}`}>
                <i class="fa-solid fa-play"></i> Watch now
              </Link>
            </button>
          </div>
        </div>
        <div className="listfilm-container">
          <div className="listfilm-item">
          <ListFilm films={films} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFilm;
