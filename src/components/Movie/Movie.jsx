import { useFavoriteContext } from "../../context/useFavoriteContext";
import { Link, useLocation } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import defaultImage from "../../assets/default.jpg";
import PropTypes from "prop-types";
import "./Movie.scss";

const Movie = ({ movie }) => {
  const { pathname } = useLocation();
  const {
    original_title,
    original_name,
    title,
    release_date: date,
    first_air_date: seriesDate,
    poster_path: img,
  } = movie;
  const movieTitle = title
    ? title
    : original_name
    ? original_name
    : original_title;
  const year = date
    ? new Date(date).getFullYear()
    : new Date(seriesDate).getFullYear();

  const { favorites, addToFavorites, removeFromFavorites } =
    useFavoriteContext();

  const favoriteChecker = (id) => {
    const checkFavorite = favorites.some((movie) => movie.id === id);
    return checkFavorite;
  };

  return (
    <li className="movie-item">
      <img
        src={img ? `https://image.tmdb.org/t/p/w200/${img}` : defaultImage}
        alt={movieTitle}
        width="100%"
        height="auto"
      />
      <div className="movie-details">
        <div>
          {pathname.indexOf("/favorites") !== -1 ? (
            <h3>
              {movieTitle.length < 20
                ? movieTitle.toLowerCase()
                : `${movieTitle.slice(0, 20).toLowerCase()}...`}
            </h3>
          ) : (
            <Link
              to={
                pathname.includes("/series")
                  ? `/series/${movie.id}`
                  : `/movies/${movie.id}`
              }
              title="Movie details"
            >
              <h3>
                {movieTitle.length < 20
                  ? movieTitle.toLowerCase()
                  : `${movieTitle.slice(0, 20).toLowerCase()}...`}
              </h3>
            </Link>
          )}

          <p>
            <span>📅 </span>
            <span>{year ? year : "Year is not available"}</span>
          </p>
        </div>

        <a
          className="favorite"
          title={
            movie.isFavorite ? "Remove from favorites" : "Add to favorites"
          }
        >
          {favoriteChecker(movie.id) ? (
            <FaHeart
              onClick={() => removeFromFavorites(movie.id)}
              className="favorite-active"
            />
          ) : (
            <FiHeart onClick={() => addToFavorites(movie)} />
          )}
        </a>
      </div>
    </li>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default Movie;
