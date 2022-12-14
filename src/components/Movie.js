import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from './Movie.module.css';
import { useDispatch } from "react-redux";
import { addFav, deleteFav } from "../features/favs/favsSlice";
import FavButton from "./FavButton";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";

function Movie({ movieObj, isFav }) {
    const dispatch = useDispatch();

    function handleFavClick(addToFav, obj) {
        if (addToFav === true) {
            console.log(obj);
            dispatch(addFav(obj));
        } else {
            dispatch(deleteFav(obj));
        }
    }

    return (
        <div className={styles.movie}>
            {isFav && (
                <div className="favorite">
                    <img src={`${imageFolderPath}heart.png`} alt="Heart" className={styles.heart} />
                </div>
            )}
            {movieObj.poster_path === null ? (<p>no image available</p>)
                : (<img src={`https://image.tmdb.org/t/p/w300${movieObj.poster_path}`} alt={movieObj.title} className={styles.movie__img} />)}
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${movieObj.id}`}>{movieObj.title}</Link>
            </h2>
            <p className={styles.movie__year}>{movieObj.release_date}</p>
            <p>{movieObj.overview}</p>
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