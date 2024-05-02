import React, { useEffect, useState, useContext } from "react";
import "./NewFilm.css";
import ListFilm from "../ListFilm/ListFilm";
import { Link } from "react-router-dom";
import { getDetailFilm, getNewFilm } from "../Axios/NewFilm";
import { FilmContext } from "../../context/GlobalFIlm";
import { DETAIL, FILMS } from "../../utils/film";

const NewFilm = () => {
  // const [films, setFilms] = useState([]);

  // const { film, handleSetFilmDetail, handleSetLink } = useContext(FilmContext);
  // useEffect(() => {
  //   getFilm();
  // }, []);
  // const getFilm = async () => {
  //   try {
  //     const res = await getNewFilm();
  //     getDetailOneFilm(res.data.items[0].slug);
  //     setFilms(res.data.items);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const getDetailOneFilm = async (slug) => {
  //   try {
  //     const resp = await getDetailFilm(slug);
  //     handleSetFilmDetail(resp.data.movie);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <>
      <div className="newfilm-container">
        <img src={FILMS[0].thumb_url} alt="background" />
        <div className="newfilm-content">
          <h5>{FILMS[0] && FILMS[0].name}</h5>
          <div className="content-info">
            <span>{DETAIL.country}</span>
            {} Views: {DETAIL.view} | {DETAIL.quality} | {DETAIL.time} | {DETAIL.lang}
          </div>
          <p>
            {DETAIL.content.substr(0, 150)}
            <span style={{ color: "yellow" }}>...See more</span>
          </p>

          <div className="newfilm-btn">
            <button className="watch-traller-btn">Watch traller</button>
            <button className="watch-now-btn">
              <Link to={`/watchFilm/${FILMS[0].slug}`}>
                <i class="fa-solid fa-play"></i> Watch now
              </Link>
            </button>
          </div>
        </div>
        <div className="listfilm-container">
          <div className="listfilm-item">
          <ListFilm films={FILMS} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFilm;
