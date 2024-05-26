import React, { useContext, useEffect, useState } from "react";
import "./DetailFilm.css";
import { Link, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { getDetailFilm } from "../Axios/NewFilm";
import { getComment } from "../Axios/NewFilm";

import { FilmContext } from "../../context/GlobalFIlm";
import ReactPlayer from "react-player";
import Loading from "../Loading/Loading";
import PlayVideo from "../PlayVideo/PlayVideo";
import RatingMui from "./RatingMui";
import { Rating } from "@mui/material";

const DetailFilm = () => {
  let { slug } = useParams();
  const isPhone = useMediaQuery({
    query: "(max-width: 756px)",
  });
  const [watch, setWatch] = useState(false);
  const [loading, setLoading] = useState(true);
  const { filmDetail, link, handleSetFilmDetail, handleSetLink, singleFilms } =
    useContext(FilmContext);
  const [slugFilm,setSlugFilm] = useState(slug);
  const [comments,setComments] = useState([])

  useEffect(() => {
    getDetailOneFilm(slug);
  }, [slugFilm]);

  const getDetailOneFilm = async (slug) => {
    const resp = await getDetailFilm(slug);
    handleSetLink(resp.data.episodes);
    handleSetFilmDetail(resp.data.movie);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const getComments = async () => {
    const res = await getComment()
    console.log(res.data);
    setComments(res.data)
  }

  useEffect(() => {
    getComments();
  },[])

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
                        <i className="fa-solid fa-play watch-film-play-button"></i>
                      </div>
                      <p>{filmDetail.content}</p>
                      <div className="watch-video-film-info">
                        <i
                          style={{ marginRight: "0.2rem" }}
                          className="fa-solid fa-calendar-days"
                        ></i>
                        {filmDetail.year}
                        <i
                          style={{ marginLeft: "1rem", marginRight: "0.2rem" }}
                          className="fa-regular fa-eye"
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
                        <i className="fa-solid fa-play"></i>
                      </div>

                      <h2>{filmDetail.name}</h2>
                      <h4>{filmDetail.origin_name}</h4>
                      <p>{filmDetail.content}...</p>
                      <div className="watch-video-film-info">
                        <i
                          className="fa-solid fa-calendar-days"
                          style={{ marginRight: "0.2rem" }}
                        ></i>
                        {filmDetail.year}
                        <i
                          style={{ marginLeft: "1rem", marginRight: "0.2rem" }}
                          className="fa-regular fa-eye"
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
                    <li>Trạng thái: {filmDetail.status}</li>
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
                      Quốc gia: {filmDetail.country[0].name} <span style={{ color: "#cfb73a" }}></span>
                    </li>
                    <li>
                      IMDb: <span className="info-watch-rating">6.7</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="watch-comment">
                <h2>Bình luận:</h2>
                <div className="watch-comment-detail">
                  {comments.map(comment => 
                    <div className="watch-comment-info">
                    <h3>{comment.name}</h3>
                    <RatingMui rating={comment.rating / 2}/>
                    <p>
                      {comment.comment}
                    </p>
                  </div>
                  )}
                  <div className="watch-comment-input">
                    <div className="watch-comment-img">
                      <img
                        src="https://th.bing.com/th/id/OIP.LU4Cmp_LvNOuhtWZnQMHvgHaHP?w=197&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                        width={"50px"}
                      />
                    </div>
                    <div className="watch-comment-textinput">
                      <input
                        type="text"
                        placeholder="Viết bình luận..."
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="detailFilm-list-suggest">
              <div className="detailFilm-list-suggest-top">
                <h5 style={{ color: "white" }}>PHIM TRẤN THÀNH (MAI)</h5>
                <p>Mai</p>
                <Rating
                        size="medium"
                        name="read-only"
                        value={4}
                        readOnly
                      />              </div>
              {singleFilms.map((element) => 
                <div key={element._id} className="detailFilm-list-suggest-bottom">
                  <div className="detailFilm-list-suggest-bottom-img">
                  <Link  to={`/watchFilm/${element.slug}`}>
                    <img
                      src={`https://img.phimapi.com/${element.poster_url}`}
                      width={"100%"}
                      height={"70px"}
                      onClick={() => setSlugFilm(element.slug)}
                    />
                  </Link>
                  </div>
                  <div className="detailFilm-list-suggest-bottom-content">
                    <Link  to={`/watchFilm/${element.slug}`}>
                      <h5 onClick={() => setSlugFilm(element.slug)}>{element.name}</h5>
                    </Link>
                    <p>{element.category[0].name}</p>
                    <p>Thời lượng: {element.time}</p>
                    <div className="detailFilm-list-suggest-bottom-content-rating">
                      <Rating
                        size="small"
                        name="read-only"
                        value={Math.random() * 5}
                        readOnly
                      />
                      <div className="rating-quality">{element.quality} {element.lang}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailFilm;
