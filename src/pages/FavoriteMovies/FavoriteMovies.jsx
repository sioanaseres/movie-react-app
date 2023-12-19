import MovieList from "../../components/MovieList/MovieList";
import { useFavoriteContext } from "../../context/useFavoriteContext";

const FavoriteMovies = () => {
  const { favorites } = useFavoriteContext();
  if (!favorites.length) {
    return (
      <div className="favorites">
        <h2 className="align-center">No Favorite Movies to display</h2>
      </div>
    );
  }
  return (
    <div>
      <h2 className="align-center ">Your Favorite Movies</h2>

      <MovieList movies={favorites} />
    </div>
  );
};

export default FavoriteMovies;
