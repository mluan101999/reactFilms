import React from "react";
import "./FilmCard.css";

const FilmCard = ({ film }) => {
  return (
    <div className="newfilm-card-container">
      <p>{film.quality ? film.quality : "HD"}</p>
      <img
        src={
          film.poster_url.indexOf("https://img.phimapi.com/") === -1
            ? `https://img.phimapi.com/${film.poster_url}`
            : `${film.poster_url}`
        }
        alt="thumnail"
      />
      <span></span>
      <div>{film.name}</div>
    </div>
  );
};

export default FilmCard;
