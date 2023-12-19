import "./NavBar.scss";
import PropTypes from "prop-types";

const NavBar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img" aria-label="camera">
          🎬
        </span>
        <h1>Movie App</h1>
      </div>
      {children}
    </nav>
  );
};

NavBar.propTypes = {
  children: PropTypes.node,
};
export default NavBar;
