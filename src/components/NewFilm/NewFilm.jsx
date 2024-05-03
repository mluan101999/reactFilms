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
import {
  getAnimeFilm,
  getNewFilm,
  getSeriesFilm,
  getSignleFilm,
  getTvShowFilm,
} from "../Axios/NewFilm";
import { FilmContext } from "../../context/GlobalFIlm";
import { DETAIL, FILMS, LIST_TITLE_FILM } from "../../utils/film";
import Slider from "react-slick";
import Loading from "../Loading/Loading";

const NewFilm = () => {
  const sliderRef = useRef();
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    singleFilms,
    seriesFilms,
    animeFIlms,
    setSingleFilm,
    setSeriesFilm,
    setAnimeFilm,
  } = useContext(FilmContext);

  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    getFilm();
  }, []);

  const getFilm = async () => {
    try {
      const res = await getNewFilm();
      const singleFilm = await getSignleFilm();
      const seriesFilm = await getSeriesFilm();
      const animeFilm = await getAnimeFilm();
      // getDetailOneFilm(res.data.items[0].slug);
      setFilms(res.data.items);
      setSingleFilm(singleFilm.data.data.items);
      setSeriesFilm(seriesFilm.data.data.items);
      setAnimeFilm(animeFilm.data.data.items);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
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
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            <div className="list-newfilm">
              <h5>Phim Lẻ Mới Nhất 2024</h5>
              <ListFilm films={singleFilms} />
            </div>
            <div className="list-newfilm">
              <h5>Phim Mới Cập Nhật</h5>
              <ListFilm films={films} />
            </div>
            <div className="list-newfilm">
              <h5>Phim Bộ Hoạt Hình Mới Nhất 2024</h5>
              <ListFilm films={animeFIlms} />
            </div>
            <div className="list-newfilm">
              <h5>Phim Bộ Mới Nhất 2024</h5>
              <ListFilm films={seriesFilms} />
            </div>
          </Fragment>
        )}
      </div>
    </>
  );
};

export default NewFilm;
