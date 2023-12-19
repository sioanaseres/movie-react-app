import PropTypes from "prop-types";
import "./Pagination.scss";
const Pagination = ({ currentPage, handlePageChange }) => {
  return (
    <div className="page-buttons">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>
      <span> Page {currentPage} </span>
      <button onClick={() => handlePageChange(currentPage + 1)}>
        Next Page
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default Pagination;
