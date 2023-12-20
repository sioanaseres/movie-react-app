import { useParams, Link } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import defaultMovieImage from "../../assets/movie-details-default.jpg";

const API_KEY = import.meta.env.VITE_API_KEY;
const SeriesDetails = () => {
  const { id } = useParams();

  const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=${API_KEY}`;

  const { data: movie, isLoading, error } = useMovieDetails(url);

  const {
    original_title: title,
    overview,
    homepage,
    backdrop_path: imgUrl,
    genres,
    tagline,
  } = movie;

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <>
      <Link to="/series">Back to all series</Link>
      <div className="movie-details-item">
        <img
          src={
            imgUrl
              ? `https://image.tmdb.org/t/p/w500/${imgUrl}`
              : defaultMovieImage
          }
          alt={title}
          width="100%"
          height="auto"
        />
        <div className="movie-description">
          <h2>{title}</h2>
          <h4>{tagline}</h4>
          <span>Description:</span>
          <p>{overview ? overview : "Description not available"}</p>
          <span>Website:</span>
          {homepage ? (
            <a href={homepage} target="_blank" rel="noreferrer">
              {homepage}
            </a>
          ) : (
            <p>No website available</p>
          )}
          <span className="genres">Genres:</span>
          <ul>
            {genres ? (
              genres.map((gen) => <li key={gen.id}>{gen.name}</li>)
            ) : (
              <p>Genre not available</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SeriesDetails;
