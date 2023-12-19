import { useState, useEffect } from "react";
import FavoritesContext from "./favoritesContext";
import PropTypes from "prop-types";

const FavoritesContextProvider = ({ children }) => {
  const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favorites, setFavorites] = useState(initialFavorites);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };
  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== id)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default FavoritesContextProvider;
