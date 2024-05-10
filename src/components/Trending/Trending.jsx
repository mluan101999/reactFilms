import React, { useState, useContext, Fragment } from "react";
import "./Trending.css";
import ListFilm from "../ListFilm/ListFilm";
import { FilmContext } from "../../context/GlobalFIlm";
import Loading from "../Loading/Loading";
import SearchFilm from "../SearchFilm/SearchFilm";

const Trending = () => {
  const [loading, setLoading] = useState(true);
  const { searchValue, findFilms } = useContext(FilmContext);
  return (
    <div className="newfilm-container">
      <div className="newfilm-searchInput">
        <SearchFilm />
      </div>
      {findFilms.length !== 0 && (
        <Fragment>
          <div className="list-newfilm">
            <h5>Kết quả tìm kiếm: {searchValue}</h5>
            {findFilms.length !== 0 ? (
              <ListFilm films={findFilms} />
            ) : (
              "<div>Rất tiếc, không có nội dung nào trùng khớp yêu cầu.</div>"
            )}
          </div>
        </Fragment>
      )}
      ;
    </div>
  );
};

export default Trending;
