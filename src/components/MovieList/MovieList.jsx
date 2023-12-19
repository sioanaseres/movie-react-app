import Movie from "../Movie/Movie";
import "./MovieList.scss";
import PropTypes from "prop-types";

const MovieList = ({ movies }) => {
  return (
    <ul className="movie-list">
      {movies && movies.map((movie) => <Movie movie={movie} key={movie.id} />)}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieList;
