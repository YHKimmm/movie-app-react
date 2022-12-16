import PropTypes from "prop-types";
import styles from './DetailMovie.module.css';

function DetailMovie({ movieObj }) {
    return (
        <div className={styles.detail__movie}>
            <div className={styles.movie__bgPoster} style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w300${movieObj.backdrop_path}")` }}>
                <div className={styles.movie__sPoster}>
                    {movieObj.poster_path === null ? (<p>No Image Available</p>)
                        : (<img src={`https://image.tmdb.org/t/p/w300${movieObj.poster_path}`} alt={movieObj.title} />)}
                </div>
            </div>
            <section className={styles.movie__content}>
                <div className={styles.title}>
                    <h1>{movieObj.title}</h1>
                </div>

                <div className={styles.overview}>
                    <h3>Overview</h3>
                    <p>{movieObj.overview}</p>
                </div>

                <div className={styles.released}>
                    <h3>Release</h3>
                    <p>{movieObj.release_date}</p>
                </div>

                <div className={styles.rates}>
                    <h3>Rate</h3>
                    <p>{Math.floor(movieObj.vote_average * 10)}%</p>
                </div>

                <div className={styles.genre}>
                    <h3>Genre</h3>
                    <p>{(movieObj.genres.map(g => g.name).join(', '))}</p>
                </div>
            </section>
        </div>
    )
}

DetailMovie.prototype = {
    movieObj: PropTypes.object.isRequired
}


export default DetailMovie;