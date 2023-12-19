import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
import PropTypes from "prop-types";

const Home = ({ movies, isLoading, error, children }) => {
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <>
      <MovieList movies={movies} />
      {children}
    </>
  );
};

Home.propTypes = {
  movies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  children: PropTypes.node,
};
export default Home;
