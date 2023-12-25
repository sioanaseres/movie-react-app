import "./Header.scss";
import PropTypes from "prop-types";

const Header = ({ children }) => {
  return <header>{children}</header>;
};

Header.propTypes = {
  children: PropTypes.node,
};
export default Header;
