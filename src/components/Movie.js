import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from './Movie.module.css';
import { useDispatch } from "react-redux";
import { addFav, deleteFav } from "../features/favs/favsSlice";
import FavButton from "./FavButton";
import WatchButton from "./WatchButton";
import { addWatchList, deleteWatchList } from "../features/watch/watchSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";

function Movie({ movieObj, isFav, isWatchList }) {
    const dispatch = useDispatch();

    function handleFavClick(addToFav, obj) {
        if (addToFav === true) {
            console.log(obj);
            dispatch(addFav(obj));
        } else {
            dispatch(deleteFav(obj));
        }
    }

    function handleWatchListClick(addToWatchList, obj) {
        if (addToWatchList === true) {
            console.log(obj);
            dispatch(addWatchList(obj));
        } else {
            dispatch(deleteWatchList(obj));
        }
    }

    return (
        <div className={styles.movie}>
            {isFav && (
                <div className="favorite">
                    <img src={`${imageFolderPath}heart.png`} alt="Heart" className={styles.heart} />
                </div>
            )}
            {isWatchList && (
                <div className="watch-list">
                    <FontAwesomeIcon icon={faPlus} size='3x' className={styles.plus} />
                </div>
            )}
            <div className={styles.movie__poster}>
                {movieObj.poster_path === null ? (<p>no image available</p>)
                    : (<img src={`https://image.tmdb.org/t/p/w300${movieObj.poster_path}`} alt={movieObj.title} className={styles.movie__img} />)}
            </div>
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${movieObj.id}`}>{movieObj.title}</Link>
            </h2>
            <Link to={`/movie/${movieObj.id}`}>
                <button className={styles.more__info}>More Info</button>
            </Link>
            <section className={styles.movie__rate}>
                <img src={`${imageFolderPath}star.png`} alt="Heart" className={styles.star} />
                <p>{Math.ceil(movieObj.vote_average * 10)}%</p>
            </section>
            <p className={styles.movie__year}>{movieObj.release_date}</p>
            <p className={styles.movie__overview}>{movieObj.overview.slice(0, 150)}...</p>
            <section className={styles.movie__utilities}>
                <div className="btn-favourite">
                    {isFav ? (
                        <FavButton
                            movieObj={movieObj}
                            remove={true}
                            handleFavClick={handleFavClick}
                        />
                    ) : (
                        <FavButton
                            movieObj={movieObj}
                            handleFavClick={handleFavClick}
                        />
                    )}
                </div>
                <div className="btn-watch">
                    {isWatchList ? (
                        <WatchButton
                            movieObj={movieObj}
                            remove={true}
                            handleWatchClick={handleWatchListClick}
                        />
                    ) : (
                        <WatchButton
                            movieObj={movieObj}
                            handleWatchClick={handleWatchListClick}

                        />
                    )}
                </div>
            </section>
        </div>
    )
}

Movie.prototype = {
    movieObj: PropTypes.object.isRequired,
    isFav: PropTypes.bool.isRequired,
    isWatchList: PropTypes.bool.isRequired,
}


export default Movie;