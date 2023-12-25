import { Link } from "react-router-dom";
import "./NavBar.scss";
import PropTypes from "prop-types";

const NavBar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <div className="logo">
          <span role="img" aria-label="camera">
            🎬
          </span>
          <h1>Movie App</h1>
        </div>
      </Link>
      {children}
    </nav>
  );
};

NavBar.propTypes = {
  children: PropTypes.node,
};
export default NavBar;
