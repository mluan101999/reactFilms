import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from "./components/Navbar/Navbar";
import NewFilm from "./components/NewFilm/NewFilm";
import { Routes, Route } from "react-router-dom";
import Trending from "./components/Trending/Trending";
import DetailFilm from "./components/DetailFilm/DetailFilm";
import { WATCH_DETAILFILM_ROUTE, SEARCH_FILM_ROUTE} from "./utils/route";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<NewFilm />} />
          <Route path={SEARCH_FILM_ROUTE} element={<Trending />} />
          <Route path={WATCH_DETAILFILM_ROUTE} element={<DetailFilm />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
