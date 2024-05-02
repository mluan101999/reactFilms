import axios from "axios";
const url = "https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1";
const urlDetail = "https://phimapi.com/phim/";

export const getNewFilm = () => {
  return axios.get(url);
};
export const getDetailFilm = (slug) => {
  return axios.get(urlDetail + slug);
};
