import React, { useRef } from "react";
import "./ListFilm.css";
import FilmCard from "./FilmCard/FilmCard";
import { FILMS } from "../../utils/film";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ListFilm = ({ films }) => {
  const sliderRef = useRef();
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="listfilm-container">
      <Slider ref={sliderRef} {...setting}>
        {films &&
          films.map((film, index) => (
            <Link to={`/watchFilm/${films.slug}`}>
              <FilmCard key={index} film={film} />
            </Link>
          ))}
      </Slider>
    </div>
  );
};

export default ListFilm;
