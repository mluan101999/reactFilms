import React, { useRef } from "react";
import "./ListFilm.css";
import FilmCard from "./FilmCard/FilmCard";
import { FILMS } from "../../utils/film";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ListFilm = ({ films }) => {
  return (
    <div className="listfilm-container">
      {films &&
        films.map((film, index) => (
          <Link key={index} to={`/watchFilm/${film.slug}`}>
            <FilmCard film={film} />
          </Link>
        ))}
    </div>
  );
};

export default ListFilm;
