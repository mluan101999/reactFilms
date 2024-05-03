import React, { useContext, useEffect, useState } from "react";
import "./DetailFilm.css";
import { Link, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { getDetailFilm } from "../Axios/NewFilm";
import { FilmContext } from "../../context/GlobalFIlm";
import ReactPlayer from "react-player";
import Loading from "../Loading/Loading";
import PlayVideo from "../PlayVideo/PlayVideo";

const DetailFilm = () => {
  let { slug } = useParams();
  const isPhone = useMediaQuery({
    query: "(max-width: 756px)",
  });
  const [watch, setWatch] = useState(false);
  const [loading, setLoading] = useState(true);
  const { filmDetail, link, handleSetFilmDetail, handleSetLink } =
    useContext(FilmContext);

  useEffect(() => {
    getDetailOneFilm(slug);
  }, []);

  const getDetailOneFilm = (slug) => {
    const resp = getDetailFilm(slug)
      .then((onfulfilled) => {
        handleSetLink(onfulfilled.data.episodes);
        handleSetFilmDetail(onfulfilled.data.movie);
      })
      .catch((onrejected) => console.log(onrejected))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };
  const play = {
    fill: true,
    fluid: true,
    autoplay: false,
    controls: true,
    preload: "metadata",
    sources: [
      {
        src: link.link_film,
        type: "application/x-mpegURL",
      },
    ],
  };
  const handleWatchFilm = () => {
    setWatch(!watch);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="detailFilm-container">
          <div className="detailFilm-redirect">
            Trang chủ / Phim Mới / {filmDetail.name}
          </div>
          <div className="deailFilm-content">
            <div className="detailFilm-watch-film">
              <div className="watch-video">
                <div
                  className={`watch-video-background ${
                    watch ? "opacity-custom" : ""
                  }`}
                >
                  <img
                    className={` ${
                      watch ? "watch-film-hide" : "watch-film-show"
                    }`}
                    src={filmDetail.thumb_url}
                    alt="background"
                  />
                  <div
                    className={`${
                      watch ? "watch-film-show" : "watch-film-hide"
                    }`}
                  >
                    <PlayVideo {...play} width={100} />
                  </div>
                </div>
                {isPhone ? (
                  <div
                    className={`watch-video-film-mobile ${
                      watch ? "watch-film-hide" : "watch-film-show"
                    }`}
                  >
                    <div>
                      <h2> {filmDetail.name}</h2>
                      <h4>{filmDetail.origin_name}</h4>
                      <div
                        onClick={handleWatchFilm}
                        className="watch-film-play"
                      >
                        <img src={filmDetail.poster_url} alt="image" />
                        <i class="fa-solid fa-play watch-film-play-button"></i>
                      </div>
                      <p>{filmDetail.content}</p>
                      <div className="watch-video-film-info">
                        <i
                          style={{ marginRight: "0.2rem" }}
                          class="fa-solid fa-calendar-days"
                        ></i>
                        {filmDetail.year}
                        <i
                          style={{ marginLeft: "1rem", marginRight: "0.2rem" }}
                          class="fa-regular fa-eye"
                        ></i>
                        {filmDetail.view}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`watch-video-film ${
                      watch ? "watch-film-hide" : "watch-film-show"
                    }`}
                  >
                    <img
                      onClick={handleWatchFilm}
                      src={filmDetail.poster_url}
                      alt="image"
                    />

                    <div>
                      <div
                        onClick={handleWatchFilm}
                        className="watch-film-play-button"
                      >
                        <i class="fa-solid fa-play"></i>
                      </div>

                      <h2>{filmDetail.name}</h2>
                      <h4>{filmDetail.origin_name}</h4>
                      <p>{filmDetail.content}...</p>
                      <div className="watch-video-film-info">
                        <i
                          class="fa-solid fa-calendar-days"
                          style={{ marginRight: "0.2rem" }}
                        ></i>
                        {filmDetail.year}
                        <i
                          style={{ marginLeft: "1rem", marginRight: "0.2rem" }}
                          class="fa-regular fa-eye"
                        ></i>
                        {filmDetail.view}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="watch-info">
                <h2>Thông tin phim:</h2>
                <div className="watch-info-detail">
                  <ul>
                    <li>Trạng thái:{filmDetail.status}</li>
                    <li>Thời lượng: {filmDetail.time}</li>
                    <li>
                      Độ phân giải:{" "}
                      <span className="info-watch-quanlity">
                        {filmDetail.quality}
                      </span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Thế loại:{" "}
                      <span style={{ color: "#cfb73a" }}>
                        {filmDetail.type}
                      </span>
                    </li>
                    <li>
                      Quốc gia: <span style={{ color: "#cfb73a" }}></span>{" "}
                    </li>
                    <li>
                      IMDb: <span className="info-watch-rating">6.7</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="watch-comment">Bình luận</div>
            </div>
            <div className="detailFilm-list-suggest">List Film</div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailFilm;
