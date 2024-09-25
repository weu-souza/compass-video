import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
// import Loader from "./components/Loader"
// import NotFound from "./shared/notFound/NotFound"
// import NotFound2 from "./shared/notFound/NotFound2"

import Main from "./pages/main/Main";
import Home from "./pages/main/home-component/Home";
import Movie from "./pages/main/movie-component/Movie";
import Serie from "./pages/main/serie-component/Serie";
import Celebrity from "./pages/main/celebrity-component/Celebrity";
// import Tvshow from "./components/Tvshow";
import SerieFilho from "./pages/main/serie-component/SerieFilho";

import Collections from "./pages/main/Collections/Collections";
import MovieFilho from "./pages/main/movie-component/MovieFilho";
import Search from "./pages/Search";
import VideoPlayer from "./components/Player/VideoPlayer";
import User_Account from "./pages/User_Account";
import Tvshow from "./pages/main/serie-component/Tvshow";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="serie" element={<Serie />} />
          <Route path="celebrity" element={<Celebrity />} />
          <Route path="serie/:id" element={<SerieFilho />} />
          <Route path="serie/:id/:season_number" element={<Tvshow/>} />
          <Route path="collection/:id" element={<Collections/>}/>
          <Route path="movie/:id" element={<MovieFilho/>}/>  
        <Route path="search" element={<Search />} />   

        <Route path="mylist" element={<User_Account/>}/>
        </Route>
        <Route path="/player" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;