import { useContext } from "react";
import FavoritesContext from "./favoritesContext";

export const useFavoriteContext = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error(
      "FavoriteContext should be within FavoritesContextProvider "
    );
  }
  return context;
};
