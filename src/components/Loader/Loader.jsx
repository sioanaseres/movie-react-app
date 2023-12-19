import { FiLoader } from "react-icons/fi";
import "./Loader.scss";
const Loader = () => {
  return (
    <div className="loader">
      <FiLoader className="loader-icon" />
      <h1> Loading ... </h1>
    </div>
  );
};

export default Loader;
