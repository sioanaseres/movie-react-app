import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesContextProvider from "./context/FavoritesContextProvider";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Home from "./pages/Home/Home";
import TVSeries from "./pages/TVSeries/TVSeries";
import FavoriteMovies from "./pages/FavoriteMovies/FavoriteMovies";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SeriesDetails from "./components/SeriesDetails/SeriesDetails";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Pagination from "./components/Pagination/Pagination";
import Footer from "./components/Footer/Footer";
import { useMovieData } from "./hooks/useMovieData";

import "./scss/main.scss";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [moviesCurrentPage, setMoviesCurrentPage] = useState(1);
  const [tvSeriesCurrentPage, setTVSeriesCurrentPage] = useState(1);
  const [searchCurrentPage, setSearchCurrentPage] = useState(1);

  const discoverMovieUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${moviesCurrentPage}&sort_by=popularity.desc&api_key=${API_KEY}`;
  const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=false&language=en-US&page=${searchCurrentPage}&sort_by=popularity.desc&query=${query}&api_key=${API_KEY}`;

  const url = query.length >= 3 ? searchMovieUrl : discoverMovieUrl;
  const { data: movies, isLoading, error, fetchData } = useMovieData(url);

  const handleMoviesPageChange = (newPage) => {
    if (!query) {
      setMoviesCurrentPage(newPage);
    } else if (query) {
      setSearchCurrentPage(newPage);
    }
  };

  const handleTVSeriesPageChange = (newPage) => {
    setTVSeriesCurrentPage(newPage);
  };

  useEffect(() => {
    fetchData(url);
  }, [searchCurrentPage, query]);
  return (
    <div className="app">
      <BrowserRouter>
        <FavoritesContextProvider>
          <NavBar>
            <Search query={query} setQuery={setQuery} />
          </NavBar>
          <Banner />
          <Main setQuery={setQuery}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home movies={movies} isLoading={isLoading} error={error}>
                    <Pagination
                      handlePageChange={handleMoviesPageChange}
                      currentPage={
                        query ? searchCurrentPage : moviesCurrentPage
                      }
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

              <Route path="/favorites" element={<FavoriteMovies />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/series/:id" element={<SeriesDetails />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </Main>

          <Footer />
        </FavoritesContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
