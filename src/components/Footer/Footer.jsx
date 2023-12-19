import { BiMoviePlay } from "react-icons/bi";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        <span>
          <BiMoviePlay />
        </span>
        Popular <span>Movies</span> and <span>TV Series</span> from TheMovieDB -{" "}
        {year}
      </p>
    </footer>
  );
};

export default Footer;
