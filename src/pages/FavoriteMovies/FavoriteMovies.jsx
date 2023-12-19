import MovieList from "../../components/MovieList/MovieList";
import { useFavoriteContext } from "../../context/useFavoriteContext";

const FavoriteMovies = () => {
  const { favorites } = useFavoriteContext();
  if (!favorites.length) {
    return <h2>No Favorite Movies to display</h2>;
  }
  return (
    <div>
      <h2 className="align-center">Your Favorite Movies</h2>

      <MovieList movies={favorites} />
    </div>
  );
};

export default FavoriteMovies;
