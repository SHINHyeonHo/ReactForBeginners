import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary !== null ? summary.length > 235 ? `${summary.slice(0, 235)}...` : summary : "No Summary"}</p>
      {genres && Array.isArray(genres) && genres.length > 0 ? (
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
