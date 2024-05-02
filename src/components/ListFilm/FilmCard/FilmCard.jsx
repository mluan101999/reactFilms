import React from "react";
import "./FilmCard.css";

const FilmCard = ({ film }) => {
  return (
    <div className="newfilm-card-container">
      <img src={film.poster_url} alt="thumnail" />
    </div>
  );
};

export default FilmCard;
