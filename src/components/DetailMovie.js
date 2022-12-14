import PropTypes from "prop-types";

function DetailMovie({ poster, title, overview, release_date, rate, genres, id }) {
    return (
        <div id={id}>
            {poster === null ? (<p>no image available</p>)
                : (<img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />)}
            <h2>{title}</h2>
            <p>Overview: {overview}</p>
            <p>Release: {release_date}</p>
            <p>Rate : {Math.ceil(rate * 10)}%</p>
            <p>
                Genre:{genres.map(g => <li key={g.id}>{g.name}</li>)}
            </p>
        </div>
    )
}

DetailMovie.prototype = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    genres: PropTypes.objectOf(PropTypes.number, PropTypes.string).isRequired
}


export default DetailMovie;