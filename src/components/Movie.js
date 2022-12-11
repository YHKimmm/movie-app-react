import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ poster, id, title, overview, release_date }) {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{release_date}</p>
            <p>{overview}</p>
        </div>
    )
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired
}


export default Movie;