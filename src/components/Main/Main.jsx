import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Main = ({ children, setQuery }) => {
  return (
    <main className="main">
      <nav className="inner-nav">
        <NavLink to="/" onClick={() => setQuery("")}>
          Popular movies
        </NavLink>
        <NavLink to="/series">TV Series</NavLink>
        <NavLink to="/favorites">Favorite movies & tv series</NavLink>
      </nav>

      {children}
    </main>
  );
};

Main.propTypes = {
  setQuery: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Main;
