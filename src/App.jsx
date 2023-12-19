import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesContextProvider from "./context/FavoritesContextProvider";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Home from "./pages/Home/Home";
import TVSeries from "./pages/TVSeries/TVSeries";
import FavoriteMovies from "./pages/FavoriteMovies/FavoriteMovies";
import Pagination from "./components/Pagination/Pagination";
import Footer from "./components/Footer/Footer";
import { useMovieData } from "./hooks/useMovieData";

import "./scss/main.scss";
import SearchedMovies from "./pages/SearchedMovies/SearchedMovies";
import MovieDetails from "./components/MovieDetails/MovieDetails";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [moviesCurrentPage, setMoviesCurrentPage] = useState(1);
  const [tvSeriesCurrentPage, setTVSeriesCurrentPage] = useState(1);
  const [searchCurrentPage, setSearchCurrentPage] = useState(1);

  const discoverMovieUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${moviesCurrentPage}&sort_by=popularity.desc&api_key=${API_KEY}`;

  const { data: movies, isLoading, error } = useMovieData(discoverMovieUrl);

  const handleMoviesPageChange = (newPage) => {
    setMoviesCurrentPage(newPage);
  };

  const handleTVSeriesPageChange = (newPage) => {
    setTVSeriesCurrentPage(newPage);
  };

  const handleSearchPageChange = (newPage) => {
    setSearchCurrentPage(newPage);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <FavoritesContextProvider>
          <NavBar>
            <Search query={query} setQuery={setQuery} />
          </NavBar>
          <Banner />
          <Main>
            <Routes>
              <Route
                path="/"
                element={
                  <Home movies={movies} isLoading={isLoading} error={error}>
                    <Pagination
                      handlePageChange={handleMoviesPageChange}
                      currentPage={moviesCurrentPage}
                    />
                  </Home>
                }
              />
              <Route
                path="/series"
                element={
                  <TVSeries currentPage={tvSeriesCurrentPage}>
                    <Pagination
                      handlePageChange={handleTVSeriesPageChange}
                      currentPage={tvSeriesCurrentPage}
                    />
                  </TVSeries>
                }
              />
              <Route
                path="/searched"
                element={
                  <SearchedMovies
                    query={query}
                    currentPage={searchCurrentPage}
                    setQuery={setQuery}
                  >
                    <Pagination
                      handlePageChange={handleSearchPageChange}
                      currentPage={searchCurrentPage}
                    />
                  </SearchedMovies>
                }
              />
              <Route path="/favorites" element={<FavoriteMovies />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
            </Routes>
          </Main>

          <Footer />
        </FavoritesContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
