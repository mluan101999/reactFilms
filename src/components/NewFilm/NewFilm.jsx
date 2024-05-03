import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  Fragment,
} from "react";
import "./NewFilm.css";
import ListFilm from "../ListFilm/ListFilm";
import { Link } from "react-router-dom";
import { getDetailFilm, getNewFilm } from "../Axios/NewFilm";
import { FilmContext } from "../../context/GlobalFIlm";
import { DETAIL, FILMS } from "../../utils/film";
import Slider from "react-slick";

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
  const sliderRef = useRef();
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="newfilm-container">
        <Slider ref={sliderRef} {...setting}>
          {FILMS &&
            FILMS.map((film, index) => (
              <div key={index} className="newfilm-banner">
                <img src={film.thumb_url} alt="background" />
                <div className="newfilm-content">
                  <h5>{film.name}</h5>
                  <div className="content-info">
                    <span>{DETAIL.country}</span>
                    {} Views: {DETAIL.view} | {DETAIL.quality} | {DETAIL.time} |{" "}
                    {DETAIL.lang}
                  </div>
                  <p>
                    {DETAIL.content.substr(0, 120)}
                    <span style={{ color: "yellow" }}>...See more</span>
                  </p>

                  <div className="newfilm-btn">
                    <button className="watch-traller-btn">Watch traller</button>
                    <button className="watch-now-btn">
                      <Link to={`/watchFilm/${film.slug}`}>
                        <i class="fa-solid fa-play"></i> Watch now
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        <div className="list-newfilm">
          <h5>Phim Mới Cập Nhật</h5>
          <ListFilm films={FILMS} />
        </div>
      </div>
    </>
  );
};

export default NewFilm;
