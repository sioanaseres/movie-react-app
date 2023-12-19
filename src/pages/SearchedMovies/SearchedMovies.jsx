import { useMovieData } from "../../hooks/useMovieData";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
import "./SearchedMovies.scss";
import PropTypes from "prop-types";

const API_KEY = import.meta.env.VITE_API_KEY;

const SearchedMovies = ({ query, setQuery, currentPage, children }) => {
  const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&query=${query}&api_key=${API_KEY}`;
  const { data: movies, isLoading, error } = useMovieData(searchMovieUrl);

  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
    setQuery("");
  };
  if (query.trim() === "") {
    return (
      <>
        <h2>Please enter a search query.</h2>
        <Link to="/" onClick={backHome}>
          Back to all movies
        </Link>
      </>
    );
  }
  if (isLoading) return <Loader />;
  if (error)
    return (
      <>
        <ErrorMessage message={error} />
        <Link to="/" onClick={backHome}>
          Back to all movies
        </Link>
      </>
    );

  return (
    <div className="searched-movies">
      <h2 className="align-center">Searched Movies</h2>
      <Link to="/" onClick={backHome}>
        Back to all movies
      </Link>
      <MovieList movies={movies} />

      {children}
    </div>
  );
};

SearchedMovies.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  children: PropTypes.node,
};
export default SearchedMovies;
