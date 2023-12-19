import PropTypes from "prop-types";
import "./ErrorMessage.scss";

const ErrorMessage = ({ message }) => {
  return <h2 className="error"> {message} </h2>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
export default ErrorMessage;
