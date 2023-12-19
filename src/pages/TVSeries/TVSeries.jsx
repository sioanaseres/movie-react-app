import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
import { useMovieData } from "../../hooks/useMovieData";
import PropTypes from "prop-types";

const API_KEY = import.meta.env.VITE_API_KEY;
const TVSeries = ({ currentPage, children }) => {
  const tvSeriesUrl = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${currentPage}&api_key=${API_KEY}`;
  const { data: movies, isLoading, error } = useMovieData(tvSeriesUrl);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <>
      <MovieList movies={movies} />
      {children}
    </>
  );
};

TVSeries.propTypes = {
  currentPage: PropTypes.number.isRequired,
  children: PropTypes.node,
};
export default TVSeries;
