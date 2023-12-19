import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Main = ({ children }) => {
  const location = useLocation();
  const isSearchRoute = location.pathname === "/searched";
  return (
    <main className="main">
      {!isSearchRoute && (
        <nav className="inner-nav">
          <NavLink to="/">Popular movies</NavLink>
          <NavLink to="/series">TV Series</NavLink>
          <NavLink to="/favorites">Favorite movies & tv series</NavLink>
        </nav>
      )}

      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
