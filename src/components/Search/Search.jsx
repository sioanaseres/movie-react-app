import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MdOutlineClear } from "react-icons/md";
import "./Search.scss";
import PropTypes from "prop-types";

const Search = ({ query, setQuery }) => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const sanitizedInput = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
    setQuery(sanitizedInput);
  };

  const clearInput = () => {
    setQuery("");
    navigate("/");
  };

  useEffect(() => {
    if (query.length >= 3) {
      navigate("/searched");
    }
  }, [query, navigate]);

  return (
    <form>
      <label htmlFor="search">Search</label>
      <input
        className="search"
        id="search"
        type="input"
        name="search"
        placeholder="Search ..."
        value={query}
        onChange={handleInputChange}
      />
      <button type="button" onClick={clearInput} aria-label="clear input">
        <MdOutlineClear />
      </button>
    </form>
  );
};

Search.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};
export default Search;
