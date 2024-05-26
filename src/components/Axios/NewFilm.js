import axios from "axios";

const newFilm = "https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1";
const singleFilm = "https://phimapi.com/v1/api/danh-sach/phim-le";
const seriesFilm = "https://phimapi.com/v1/api/danh-sach/phim-bo";
const animeFilm = "https://phimapi.com/v1/api/danh-sach/hoat-hinh";
const tvShowFilm = "https://phimapi.com/v1/api/danh-sach/tv-shows";
const detailFilm = "https://phimapi.com/phim/";
const comments ="https://65fbb5a414650eb2100a6bf9.mockapi.io/api/v1/comments"

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

export const findFilm = (filmName,number) => {
  const findFIlm = `https://phimapi.com/v1/api/tim-kiem?keyword=${filmName}&limit=${number}`
  return axios.get(findFIlm);
};

export const getComment = () => {
  return axios.get(comments);
};