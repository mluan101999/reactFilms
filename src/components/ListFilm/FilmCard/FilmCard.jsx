import React from "react";
import "./FilmCard.css";

const FilmCard = ({ film }) => {
  return (
    <div className="newfilm-card-container">
      <img src={film.poster_url} alt="thumnail" />
      <span></span>
      <div>{film.name}</div>
    </div>
  );
};

export default FilmCard;
