import axios from "axios";

const newFilm = "https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1";
const singleFilm = "https://phimapi.com/v1/api/danh-sach/phim-le";
const seriesFilm = "https://phimapi.com/v1/api/danh-sach/phim-bo";
const animeFilm = "https://phimapi.com/v1/api/danh-sach/hoat-hinh";
const tvShowFilm = "https://phimapi.com/v1/api/danh-sach/tv-shows";
const detailFilm = "https://phimapi.com/phim/";


export const getNewFilm = () => {
  return axios.get(newFilm);
};
export const getDetailFilm = (slug) => {
  return axios.get(detailFilm + slug);
};

export const getSignleFilm = () => {
  return axios.get(singleFilm);
};

export const getSeriesFilm = () => {
  return axios.get(seriesFilm);
};

export const getAnimeFilm = () => {
  return axios.get(animeFilm);
};

export const getTvShowFilm = () => {
  return axios.get(tvShowFilm);
};