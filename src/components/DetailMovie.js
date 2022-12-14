import PropTypes from "prop-types";

function DetailMovie({ movieObj }) {
    return (
        <div id={movieObj.id}>
            {movieObj.poster_path === null ? (<p>no image available</p>)
                : (<img src={`https://image.tmdb.org/t/p/w300${movieObj.poster_path}`} alt={movieObj.title} />)}
            <h2>{movieObj.title}</h2>
            <p>Overview: {movieObj.overview}</p>
            <p>Release: {movieObj.release_date}</p>
            <p>Rate : {Math.ceil(movieObj.vote_average * 10)}%</p>
            <p>
                Genre:{movieObj.genres.map(g => <li key={g.id}>{g.name}</li>)}
            </p>
        </div>
    )
}

DetailMovie.prototype = {
    movieObj: PropTypes.object.isRequired
}


export default DetailMovie;